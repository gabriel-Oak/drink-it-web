import { ApolloResult } from '../../../shared/types/apollo';
import { ShortCocktail } from '../../../shared/types/cocktail';

export interface SearchType { [key: string]: string };

export interface HomeContextProps {
  search: SearchType;
  cocktails: ApolloResult<ShortCocktail[]>;
  randomCocktail: ApolloResult<ShortCocktail>;
  drawer: boolean,
  setDrawer: (drawer: boolean) => void,
  getCocktails: (query: SearchType) => void;
}
