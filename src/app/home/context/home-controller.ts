'use client';
import { useQuery } from '@apollo/client';
import { HomeContextProps, SearchType } from './types';
import { GET_COCKTAILS_QUERY, GET_RANDOM_QUERY } from './queries';
import { FormEventHandler, useEffect, useState } from 'react';
import useQueryParams from '../../../shared/hooks/use-query-params';
import { useMediaQuery, useTheme } from '@mui/material';
import { ShortCocktail } from '../../../shared/types/cocktail';

const useHomeController = (): HomeContextProps => {
  const { queryParams, setQueryParams } = useQueryParams<{
    type: string;
    search: string;
    customized: string;
  }>();

  const [drawer, setDrawer] = useState(false);
  const [searchIngredient, setSearchIngredient] = useState(
    queryParams.get('customized') === 'true'
      ? queryParams.get('search') as string
      : ''
  );
  const [search, setSearch] = useState<SearchType>(
    (queryParams.get('type') && queryParams.get('search'))
      ? { [queryParams.get('type') as string]: queryParams.get('search') as string }
      : { i: 'Vodka' }
  );

  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));
  const randomCocktail = useQuery<{ getRandomCocktail: ShortCocktail }>(GET_RANDOM_QUERY);
  const cocktails = useQuery<{ getCocktails: ShortCocktail[] }>(GET_COCKTAILS_QUERY, {
    variables: { query: search }
  });

  const getCocktails = (query: SearchType, preserveField?: boolean) => {
    setSearch(query);
    cocktails.fetchMore({ variables: { query } });
    setDrawer(false);

    setQueryParams({
      type: Object.keys(query)[0],
      search: Object.values(query)[0],
      customized: preserveField ? String(!!searchIngredient) : 'false',
    });

    if (!preserveField) setSearchIngredient('');
  }

  const onSubmitIngredient: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getCocktails({ i: searchIngredient }, true);
  }

  useEffect(() => {
    if (isUpMd && drawer) setDrawer(false);
  }, [isUpMd, drawer]);

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
    searchIngredient,
    setSearchIngredient,
    setDrawer,
    getCocktails,
    onSubmitIngredient
  };
}

export default useHomeController;