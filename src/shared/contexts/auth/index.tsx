'use client';
import { FC, createContext, useContext } from 'react';
import { AuthContextProps } from './types';
import useAuthController from './auth-controller';
import SingInDialog from '../../components/sign-in-dialog';
import { Alert, Snackbar } from '@mui/material';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useAuthController();

  return (
    <AuthContext.Provider value={controller}>
      {children}

      <SingInDialog />
      <Snackbar
        open={!!controller.user.error}
        autoHideDuration={6000}
        onClose={() => controller.setError(undefined)}
      >
        <Alert
          onClose={() => controller.setError(undefined)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {controller.user.error?.message}
        </Alert>
      </Snackbar>
    </AuthContext.Provider >
  );
}

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/display-name
export const withAuth = (Component: FC) => () => (
  <AuthProvider>
    <Component />
  </AuthProvider>
);