export interface ShortCocktail {
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