'use client';
import { ApolloError, useQuery } from '@apollo/client';
import { HomeCocktail, HomeContextProps, SearchType } from './types';
import { GET_COCKTAILS_QUERY, GET_RANDOM_QUERY } from './queries';
import { useState } from 'react';

const useHomeController = (): HomeContextProps => {
  const [search, setSearch] = useState<SearchType>({ i: 'Vodka' });

  const randomCocktail = useQuery<{ getRandomCocktail: HomeCocktail }>(GET_RANDOM_QUERY);
  const cocktails = useQuery<HomeCocktail[]>(GET_COCKTAILS_QUERY, {
    variables: { query: search }
  });

  const getCocktails = (query: SearchType) => {
    setSearch(query);
    cocktails.fetchMore({ variables: { query } });
  }
  
  return {
    search,
    cocktails: {
      loading: cocktails.loading,
      data: cocktails.data,
      error: cocktails.error
    },
    randomCocktail: {
      loading: randomCocktail.loading,
      data: randomCocktail.data?.getRandomCocktail,
      error: randomCocktail.error
    },
    getCocktails
  };
}

export default useHomeController;