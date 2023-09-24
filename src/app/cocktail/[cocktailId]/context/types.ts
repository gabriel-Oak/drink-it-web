import { ApolloResult } from '../../../../shared/types/apollo';
import { ShortCocktail } from '../../../../shared/types/cocktail';

export interface FullCocktail extends ShortCocktail {
  instructions: string;
}

export interface CocktailContextProps {
  similarCocktails: ApolloResult<ShortCocktail[]>;
  cocktail: ApolloResult<FullCocktail>;
}