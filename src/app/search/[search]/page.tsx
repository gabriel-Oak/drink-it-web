'use client';
import { FC } from 'react';
import Header from '../../../shared/components/header';
import RootDesktop from '../../../shared/components/root-desktop';
import CocktailList from './cocktail-list';
import { Container } from '@mui/material';
import Footer from '../../../shared/components/footer';
import UpButton from '../../../shared/components/up-button';
import Breadcrumbs from '../../../shared/components/breadcrumbs';
import { useParams } from 'next/navigation';

const SearchPage: FC = () => {
  const { search } = useParams<{ search: string }>();
  const paths = [
    { title: 'Drink.it', href: '/' },
    { title: 'Search' },
    { title: search.replaceAll('%20', ' ') }
  ];

  return (
    <RootDesktop>
      <Header />

      <Container maxWidth="lg">
        <Breadcrumbs paths={paths} />
        <CocktailList />
      </Container>

      <Footer />
      <UpButton />
    </RootDesktop>
  );
}

export default SearchPage;
