import { ApolloError } from '@apollo/client';

export interface ApolloResult<T> {
  data?: T;
  error?: ApolloError;
  loading: boolean;
}