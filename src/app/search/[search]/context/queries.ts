import { gql } from '@apollo/client';

export const GET_COCKTAILS_NAME_QUERY = gql`
  query GetCocktailsByName($name: String!) {
    getCocktailsByName(name: $name) {
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