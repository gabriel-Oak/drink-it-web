'use client';

import { FC } from 'react';
import RootDesktop from '../../../shared/components/root-desktop';
import Header from '../../../shared/components/header';
import Footer from '../../../shared/components/footer';
import { useCocktail, withCocktail } from './context';
import { Container } from '@mui/material';
import MainContent from './main-content';
import { Content } from './styles';
import UpButton from '../../../shared/components/up-button';
import RelatedDrinks from './related-drinks';
import Breadcrumbs from '../../../shared/components/breadcrumbs';

const CocktailPage: FC = () => {
  const { cocktail } = useCocktail();
  const paths = [
    { title: 'Drink.it', href: '/' },
    { title: 'Cocktail' },
    { title: cocktail.data?.name || '' }
  ];

  return (
    <RootDesktop thumb={cocktail.data?.thumb}>
      <Header />

      <Container maxWidth="lg">
        <Breadcrumbs paths={paths} />
        <Content>
          <MainContent />

          <RelatedDrinks />
        </Content>
      </Container>

      <UpButton />

      <Footer />
    </RootDesktop>
  );
}

export default withCocktail(CocktailPage);
