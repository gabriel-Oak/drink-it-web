'use client';
import { AppBar, Container, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import { Root, Section } from './styles';
import Aside from './aside';
import CocktailsList from './cocktails-list';
import { useHome } from '../context';

const HomeDesktop: FC = () => {
  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));
  const { drawer } = useHome();

  return (
    <Root drawer={drawer}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Drink.it
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Section isUpMd={isUpMd}>
          <Aside />

          <CocktailsList />
        </Section>
      </Container>
    </Root>
  );
}

export default HomeDesktop;
