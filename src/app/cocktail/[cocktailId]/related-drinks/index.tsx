'use client';
import { FC } from 'react';
import { ErrorCocktails, Root } from './styles';
import { useCocktail } from '../context';
import CocktailCard from '../../../../shared/components/cocktail-card';
import CocktailCardSkeleton from '../../../../shared/components/cocktail-card/cocktail-card-skeleton';

const RelatedDrinks: FC = () => {
  const { similarCocktails, cocktail } = useCocktail();

  return similarCocktails.error ? (
    <ErrorCocktails variant='h4' color="text.secondary">
      Oops, sorry somenthing went wrong searching for similar cocktails, try again.
    </ErrorCocktails>
  ) : (
    <Root>
      {(similarCocktails.loading || cocktail.loading) ? (
        (new Array(11)).fill(null).map((_, index) => (
          <CocktailCardSkeleton key={index} />
        ))
      ) : similarCocktails.data?.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          cocktail={cocktail}
        />
      ))}
    </Root>
  );
}

export default RelatedDrinks;
