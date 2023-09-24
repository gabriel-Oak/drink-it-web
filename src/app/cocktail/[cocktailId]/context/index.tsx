'use client';
import { FC, createContext, useContext } from 'react';
import { CocktailContextProps } from './types';
import useCocktailController from './cocktail-controller';

const CocktailContext = createContext({} as CocktailContextProps);

export const CocktailProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useCocktailController();

  return (
    <CocktailContext.Provider value={controller} >
      {children}
    </CocktailContext.Provider>
  );
}

export const useCocktail = () => useContext(CocktailContext);

// eslint-disable-next-line react/display-name
export const withCocktail = (Component: FC) => () => (
  <CocktailProvider>
    <Component />
  </CocktailProvider>
);