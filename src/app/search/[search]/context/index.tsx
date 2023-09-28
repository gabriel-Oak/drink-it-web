'use client';
import { FC, createContext, useContext } from 'react';
import { SearchContextProps } from './types';
import useSearchController from './search-controller';

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const controller = useSearchController();

  return (
    <SearchContext.Provider value={controller} >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);

// eslint-disable-next-line react/display-name
export const withSearch = (Component: FC) => () => (
  <SearchProvider>
    <Component />
  </SearchProvider>
);