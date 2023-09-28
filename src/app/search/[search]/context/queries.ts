import { gql } from '@apollo/client';

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
`;