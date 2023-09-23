import { gql } from '@apollo/client';

export const HELLO_QUERY = gql`
  query Query {
    hello
  }
`;

export const GET_COCKTAILS_QUERY = gql`
  query Query($query: CocktailQuery!) {
    getCocktails(query: $query) {
      id
      name
      thumb
      category
      measures {
        measure
        ingredient {
          name
        }
      }
    }
  }
`

export const GET_RANDOM_QUERY = gql`
  query Query {
    getRandomCocktail {
      id
      name
      thumb
      category
      measures {
        measure
        ingredient {
          name
        }
      }
    }
  }
`