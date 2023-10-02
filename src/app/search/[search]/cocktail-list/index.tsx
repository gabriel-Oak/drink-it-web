'use client';

import { FC } from 'react';
import { useSearch, withSearch } from '../context';
import { Container, ErrorCocktails, Root } from './styles';
import CocktailCardSkeleton from '../../../../shared/components/cocktail-card/cocktail-card-skeleton';
import CocktailCard from '../../../../shared/components/cocktail-card';

const CocktailList: FC = () => {
  const { cocktails } = useSearch();

  return cocktails.error ? (
    <ErrorCocktails variant='h4' color="text.secondary">
      Oops, sorry somenthing went wrong searching for cocktails, try again.
    </ErrorCocktails>
  ) : (
    <Root>
      <Container>
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

export default withSearch(CocktailList);