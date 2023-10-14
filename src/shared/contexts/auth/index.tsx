'use client';
import { FC, createContext, useContext } from 'react';
import { AuthContextProps } from './types';
import useAuthController from './auth-controller';
import { Alert, Snackbar } from '@mui/material';
import SingUpDialog from './sign-up-dialog';
import SingInDialog from './sign-in-dialog';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useAuthController();

  return (
    <AuthContext.Provider value={controller}>
      {children}

      <SingInDialog />
      <SingUpDialog />

      <Snackbar
        open={!!controller.user.error}
        autoHideDuration={12000}
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