import { FC } from 'react';
import { useHome } from '../../context';
import { Container, ErrorCocktails, Root } from './styles';
import CocktailCard from './CocktailCard';
import { useMediaQuery, useTheme } from '@mui/material';
import CocktailCardSkeleton from './CocktailCardSkelethon';

const CocktailsList: FC = () => {
  const { cocktails } = useHome();
  const { breakpoints } = useTheme();
  const isDownSm = useMediaQuery(breakpoints.down('sm'));
  console.log(cocktails);

  return cocktails.error ? (
    <ErrorCocktails variant='h4' color="text.secondary">
      Oops, sorry somenthing went wrong searching for cocktails, try again.
    </ErrorCocktails>
  ) : (
    <Root>
      <Container isDownSm={isDownSm}>
        {cocktails.loading ? (new Array(11)).fill(null).map((_, index) => (
          <CocktailCardSkeleton key={index} />
        )) : cocktails.data?.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            cocktail={cocktail}
          />
        ))}
      </Container>
    </Root>
  );
}

export default CocktailsList;
