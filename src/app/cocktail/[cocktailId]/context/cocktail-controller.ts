'use client';

import { useLazyQuery, useQuery } from '@apollo/client';
import { CocktailContextProps, FullCocktail } from './types';
import { GET_COCKTAIL_QUERY, GET_SIMILAR_COCKTAILS_QUERY } from './queries';
import { ShortCocktail } from '../../../../shared/types/cocktail';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

const useCocktailController = (): CocktailContextProps => {
  const { cocktailId } = useParams<{ cocktailId: string }>();
  const cocktail = useQuery<{ getCocktailDetail: FullCocktail }>(GET_COCKTAIL_QUERY, {
    variables: { cocktailId },
  });
  const [fetchCocktails, similarCocktails] = useLazyQuery<{
    getCocktails: ShortCocktail[];
  }>(GET_SIMILAR_COCKTAILS_QUERY);
  const similarCocktailsData = useMemo(
    () => similarCocktails
      .data
      ?.getCocktails
      .filter(({ id }) => id !== cocktailId),
    [similarCocktails, cocktailId]
  );

  useEffect(() => {
    const { data } = cocktail;
    if (data?.getCocktailDetail.measures.length)
      fetchCocktails({
        variables: {
          query: { i: data?.getCocktailDetail.measures[0].ingredient.name }
        },
      });
  }, [fetchCocktails, cocktail]);

  return {
    cocktail: {
      loading: cocktail.loading,
      data: cocktail.data?.getCocktailDetail,
      error: cocktail.error,
    },
    similarCocktails: {
      loading: similarCocktails.loading,
      data: similarCocktailsData,
      error: similarCocktails.error,
    }
  };
}

export default useCocktailController;
