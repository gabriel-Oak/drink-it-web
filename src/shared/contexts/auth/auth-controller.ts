'use client';
import { useQuery } from '@apollo/client';
import { AUTH_USER_QUERY, CREATE_USER_MUTATION, REFRESH_TOKEN_QUERY } from './queries';
import { AuthContextProps, AuthUser, CreateUser, LogInUser, User } from './types';
import { useEffect, useMemo } from 'react';
import { APP_KEY } from '../../types/app';

const useAuthController = (): AuthContextProps => {
  const storageAuth = useMemo(() => localStorage.getItem(`${APP_KEY}/auth`), []);
  const storageUser = useMemo(() => {
    const user = sessionStorage.getItem(`${APP_KEY}/user`);
    return user ? JSON.parse(user) as User : undefined;
  }, []);

  const createUser = useQuery<{
    createUser: AuthUser;
  }>(CREATE_USER_MUTATION, { skip: true });

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

  const auth = refreshToken.data?.refreshUserToken.auth
    || authUser.data?.authenticateUser.auth
    || createUser.data?.createUser.auth
    || storageAuth;

  const user = refreshToken.data?.refreshUserToken.user
    || authUser.data?.authenticateUser.user
    || createUser.data?.createUser.user
    || storageUser;

  const loading = authUser.loading
    || refreshToken.loading
    || createUser.loading;

  const error = authUser.error
    || refreshToken.error
    || createUser.error;

  useEffect(() => {
    if (auth && auth !== storageAuth)
      localStorage.setItem(`${APP_KEY}/auth`, auth);

    if (user && user !== storageUser)
      sessionStorage.setItem(`${APP_KEY}/user`, JSON.stringify(user));
  }, [auth, storageAuth, storageUser, user]);

  const signIn = (payload: LogInUser) => authUser.refetch(payload);
  const signUp = (payload: CreateUser) => createUser.refetch(payload);
  const signOut = () => {
    localStorage.removeItem(`${APP_KEY}/auth`);
    sessionStorage.removeItem(`${APP_KEY}/user`);
  }

  return {
    user: {
      loading,
      data: user,
      error
    },
    auth,
    signIn,
    signUp
    signOut,
  };
}

export default useAuthController;