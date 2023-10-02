import { useQuery } from '@apollo/client';
import { GET_COCKTAILS_NAME_QUERY } from './queries';
import { SearchContextProps } from './types';
import { useParams } from 'next/navigation';
import { ShortCocktail } from '../../../../shared/types/cocktail';

const useSearchController = (): SearchContextProps => {
  const { search } = useParams<{ search: string }>();
  const cocktails = useQuery<{
    getCocktailsByName: ShortCocktail[];
  }>(GET_COCKTAILS_NAME_QUERY, {
    variables: {
      name: search.replaceAll('%20', ' ')
    }
  });

  return {
    cocktails: {
      loading: cocktails.loading,
      data: cocktails.data?.getCocktailsByName,
      error: cocktails.error,
    }
  };
}

export default useSearchController;
