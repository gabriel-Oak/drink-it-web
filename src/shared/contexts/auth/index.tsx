'use client';
import { FC, createContext, useContext } from 'react';
import { AuthContextProps } from './types';
import useAuthController from './auth-controller';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useAuthController();

  return (
    <AuthContext.Provider value={controller} >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/display-name
export const withAuth = (Component: FC) => () => (
  <AuthProvider>
    <Component />
  </AuthProvider>
);