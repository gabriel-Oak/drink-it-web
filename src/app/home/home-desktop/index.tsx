'use client';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { useHome } from '../context';
import { Root, Section } from './styles';
import Aside from './aside';
import CocktailsList from './cocktails-list';

const HomeDesktop: FC = () => {
  const { cocktails } = useHome();

  return (
    <Root>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Drink.it
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Section>
          <Aside />

          <CocktailsList />
        </Section>
      </Container>
    </Root>
  );
}

export default HomeDesktop;
