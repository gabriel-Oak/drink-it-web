'use client';
import {
  Container, useMediaQuery, useTheme
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
  const { drawer } = useHome();
  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));

  return (
    <Root drawer={drawer}>
      <Header />

      <Container maxWidth="lg">
        <Section isUpMd={isUpMd}>
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
