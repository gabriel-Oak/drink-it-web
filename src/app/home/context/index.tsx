'use client';
import { FC, createContext, useContext } from 'react';
import { HomeContextProps } from './types';
import useHomeController from './home-controller';

export const HomeContext = createContext({} as HomeContextProps);

export const HomeProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useHomeController();

  return (
    <HomeContext.Provider value={controller} >
      {children}
    </HomeContext.Provider>
  );
}

export const useHome = () => useContext(HomeContext);

// eslint-disable-next-line react/display-name
export const withHome = (Component: FC) => () => (
  <HomeProvider>
    <Component />
  </HomeProvider>
);