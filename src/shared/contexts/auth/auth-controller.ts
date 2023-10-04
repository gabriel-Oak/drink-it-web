'use client';
import { useMutation, useQuery } from '@apollo/client';
import { AUTH_USER_QUERY, CREATE_USER_MUTATION, REFRESH_TOKEN_QUERY } from './queries';
import { AuthContextProps, AuthUser, CreateUser, LogInUser, User } from './types';
import { useEffect, useMemo, useState } from 'react';
import { APP_KEY } from '../../types/app';

const useAuthController = (): AuthContextProps => {
  const storageAuth = useMemo(() => global.localStorage?.getItem(`${APP_KEY}/auth`), []);
  const storageUser = useMemo(() => {
    const user = global.sessionStorage?.getItem(`${APP_KEY}/user`);
    return user ? JSON.parse(user) as User : undefined;
  }, []);

  const [registerUser, createUser] = useMutation<{
    createUser: AuthUser;
  }>(CREATE_USER_MUTATION);

  const authUser = useQuery<{
    authenticateUser: AuthUser;
  }>(AUTH_USER_QUERY, { skip: true });

  const refreshToken = useQuery<{
    refreshUserToken: AuthUser;
  }>(REFRESH_TOKEN_QUERY, {
    skip: !storageAuth,
    context: {
      headers: { Authorization: storageAuth }
    }
  });

  const [auth, setAuth] = useState(storageAuth);
  const [user, setUser] = useState(storageUser);

  const loading = authUser.loading
    || refreshToken.loading
    || createUser.loading;

  const error = authUser.error
    || refreshToken.error
    || createUser.error;

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

    setAuth(newAuth);
    setUser(newUser);
  }, [
    refreshToken.data,
    authUser.data,
    createUser.data,
    storageAuth,
    storageUser
  ]);

  const signIn = (payload: LogInUser) => authUser.refetch(payload);
  const signUp = (variables: CreateUser) => registerUser({ variables });
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
    signIn,
    signUp,
    signOut,
  };
}

export default useAuthController;