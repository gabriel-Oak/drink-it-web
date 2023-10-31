'use client';
import { ApolloError, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { AUTH_USER_QUERY, CREATE_USER_MUTATION, REFRESH_TOKEN_QUERY } from './queries';
import { AuthContextProps, AuthUser, CreateUser, LogInUser, User } from './types';
import { useEffect, useMemo, useState } from 'react';
import { APP_KEY } from '../../types/app';

const useAuthController = (): AuthContextProps => {
  const [singInDialog, setSingInDialog] = useState(false);
  const [singUpDialog, setSingUpDialog] = useState(false);

  const storageAuth = useMemo(() => global.localStorage?.getItem(`${APP_KEY}/auth`), []);
  const storageUser = useMemo(() => {
    const user = global.sessionStorage?.getItem(`${APP_KEY}/user`);
    return user ? JSON.parse(user) as User : undefined;
  }, []);

  const [registerUser, createUser] = useMutation<{
    createUser: AuthUser;
  }>(CREATE_USER_MUTATION, {
    notifyOnNetworkStatusChange: true,
  });

  const [executeAuthUser, authUser] = useLazyQuery<{
    authenticateUser: AuthUser;
  }>(AUTH_USER_QUERY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network'
  });

  const [executeRefreshToken, refreshToken] = useLazyQuery<{
    refreshUserToken: AuthUser;
  }>(REFRESH_TOKEN_QUERY, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  const [auth, setAuth] = useState(storageAuth);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<ApolloError | undefined>();

  useEffect(() => {
    setUser(storageUser);
    if (storageAuth) executeRefreshToken({
      context: {
        headers: { Authorization: storageAuth }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError(
      authUser.error || refreshToken.error || createUser.error
    );
    localStorage.removeItem(`${APP_KEY}/auth`);
    sessionStorage.removeItem(`${APP_KEY}/user`);
  }, [authUser.error, refreshToken.error, createUser.error])

  const loading = authUser.loading
    || refreshToken.loading
    || createUser.loading;

  useEffect(() => {
    const newAuth = refreshToken.data?.refreshUserToken.auth
      || authUser.data?.authenticateUser.auth
      || createUser.data?.createUser.auth
      || storageAuth;

    const newUser = refreshToken.data?.refreshUserToken.user
      || authUser.data?.authenticateUser.user
      || createUser.data?.createUser.user
      || storageUser;

    if (newAuth && newAuth !== storageAuth)
      localStorage.setItem(`${APP_KEY}/auth`, newAuth);

    if (newUser && newUser !== storageUser)
      sessionStorage.setItem(`${APP_KEY}/user`, JSON.stringify(newUser));

    if (newAuth && newUser) {
      setSingInDialog(false);
      setSingUpDialog(false);
    }

    setAuth(newAuth);
    setUser(newUser);
  }, [
    refreshToken.data,
    authUser.data,
    createUser.data,
    storageAuth,
    storageUser
  ]);

  const signIn = (variables: LogInUser) => {
    if (authUser.error || authUser.data) authUser.refetch(variables)
    else executeAuthUser({ variables });
  }

  const signUp = (newUser: CreateUser) => registerUser({ variables: { newUser } });
  const signOut = () => {
    localStorage.removeItem(`${APP_KEY}/auth`);
    sessionStorage.removeItem(`${APP_KEY}/user`);
    setAuth(null);
    setUser(undefined);
  }

  return {
    user: {
      loading,
      data: user,
      error
    },
    auth,
    singInDialog,
    singUpDialog,
    signIn,
    signUp,
    signOut,
    setError,
    setSingInDialog: (value: boolean) => {
      setSingInDialog(value);
      setSingUpDialog(false);
    },
    setSingUpDialog: (value: boolean) => {
      setSingUpDialog(value);
      setSingInDialog(false);
    },
  };
}

export default useAuthController;