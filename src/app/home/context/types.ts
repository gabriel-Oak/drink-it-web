import { ApolloError } from "@apollo/client";
import { ApolloResult } from "../../../shared/types/apollo";

export type SearchType = { i: string } | { q: string } | { a: string } | { c: string };

export interface HomeCocktail {
  id: string;
  name: string;
  thumb: string;
  category: string;
  measures: Array<{
    measure: string;
    ingredient: {
      name: string;
    };
  }>;
}

export interface HomeContextProps {
  search: SearchType;
  cocktails: ApolloResult<HomeCocktail[]>;
  randomCocktail: ApolloResult<HomeCocktail>;
  getCocktails: (query: SearchType) => void;
}
