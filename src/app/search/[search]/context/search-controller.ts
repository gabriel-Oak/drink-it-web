import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_COCKTAILS_QUERY } from './queries';
import { SearchContextProps } from './types';

const useSearchController = (): SearchContextProps => {
  const cocktails = useQuery(GET_COCKTAILS_QUERY);

  return {
    cocktails: {
      loading: cocktails.loading,
      data: cocktails.data,
      error: cocktails.error,
    }
  };
}

export default useSearchController;
