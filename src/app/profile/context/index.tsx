'use client';
import { FC, createContext, useContext } from 'react';
import { ProfileContextProps } from './types';
import useProfileController from './profile-controller';

export const ProfileContext = createContext({} as ProfileContextProps);

export const ProfileProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useProfileController();

  return (
    <ProfileContext.Provider value={controller} >
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

// eslint-disable-next-line react/display-name
export const withProfile = (Component: FC) => () => (
  <ProfileProvider>
    <Component />
  </ProfileProvider>
);