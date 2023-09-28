import { ApolloResult } from '../../../../shared/types/apollo';
import { ShortCocktail } from '../../../../shared/types/cocktail';

export interface SearchContextProps {
  cocktails: ApolloResult<ShortCocktail[]>;
}