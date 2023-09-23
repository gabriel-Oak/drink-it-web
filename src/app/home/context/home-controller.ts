'use client';
import { useQuery } from '@apollo/client';
import { HomeCocktail, HomeContextProps, SearchType } from './types';
import { GET_COCKTAILS_QUERY, GET_RANDOM_QUERY } from './queries';
import { useState } from 'react';
import useQueryParams from '../../../shared/hoks/use-query-params';

const useHomeController = (): HomeContextProps => {
  const { queryParams, setQueryParams } = useQueryParams<{
    type: string;
    search: string
  }>();

  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState<SearchType>(
    (queryParams.get('type') && queryParams.get('search'))
      ? { [queryParams.get('type') as string]: queryParams.get('search') as string }
      : { i: 'Vodka' }
  );

  const randomCocktail = useQuery<{ getRandomCocktail: HomeCocktail }>(GET_RANDOM_QUERY);
  const cocktails = useQuery<{ getCocktails: HomeCocktail[] }>(GET_COCKTAILS_QUERY, {
    variables: { query: search }
  });

  const getCocktails = (query: SearchType) => {
    setSearch(query);
    cocktails.fetchMore({ variables: { query } });

    setQueryParams({
      type: Object.keys(query)[0],
      search: Object.values(query)[0]
    });
  }

  return {
    search,
    cocktails: {
      loading: cocktails.loading,
      data: cocktails.data?.getCocktails,
      error: cocktails.error
    },
    randomCocktail: {
      loading: randomCocktail.loading,
      data: randomCocktail.data?.getRandomCocktail,
      error: randomCocktail.error
    },
    drawer,
    setDrawer,
    getCocktails
  };
}

export default useHomeController;