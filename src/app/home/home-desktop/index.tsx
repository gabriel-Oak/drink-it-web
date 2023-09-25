'use client';
import {
  Container
} from '@mui/material';
import { FC } from 'react';
import { Root, Section } from './styles';
import Aside from './aside';
import CocktailsList from './cocktails-list';
import { useHome } from '../context';
import UpButton from '../../../shared/components/up-button';
import Footer from '../../../shared/components/footer';
import Header from '../../../shared/components/header';

const HomeDesktop: FC = () => {
  const { drawer, randomCocktail } = useHome();

  return (
    <Root drawer={drawer} thumb={randomCocktail.data?.thumb}>
      <Header />

      <Container maxWidth="lg">
        <Section>
          <Aside />

          <CocktailsList />
        </Section>
      </Container>

      <Footer />
      <UpButton />
    </Root>
  );
}

export default HomeDesktop;
