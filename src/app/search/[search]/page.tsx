'use client';
import { FC } from 'react';
import Header from '../../../shared/components/header';
import RootDesktop from '../../../shared/components/root-desktop';
import CocktailList from './cocktail-list';

const SearchPage: FC = () => {
  return (
    <RootDesktop>
      <Header />

      <CocktailList />
    </RootDesktop>
  );
}

export default SearchPage;
