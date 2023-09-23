'use client';
import { FC, useMemo } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider as Provider, gql } from '@apollo/client';

const ApolloProvider: FC<{
  children: JSX.Element
}> = ({ children }) => {
  const client = useMemo(() => new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
    cache: new InMemoryCache(),
  }), []);

  return (
    <Provider client={client}>
      {children}
    </Provider>
  );
}

export default ApolloProvider;
