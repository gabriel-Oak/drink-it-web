import { ApolloResult } from '../../../shared/types/apollo';

export interface SearchType { [key: string]: string };

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
  drawer: boolean,
  setDrawer: (drawer: boolean) => void,
  getCocktails: (query: SearchType) => void;
}
