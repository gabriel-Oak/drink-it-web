import { gql } from '@apollo/client';

export const GET_SIMILAR_COCKTAILS_QUERY = gql`
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

export const GET_COCKTAIL_QUERY = gql`
  query Query($cocktailId: String!) {
  getCocktailDetail(cocktailId: $cocktailId) {
    name
    thumb
    measures {
      measure
      ingredient {
        name
      }
    }
    category
    instructions
  }
}
`;