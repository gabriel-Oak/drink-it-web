'use client';

import { FC } from 'react';
import { useSearch, withSearch } from '../context';

const CocktailList: FC = () => {
  const { cocktails } = useSearch();

  return (
    <div>
      heloo
    </div>
  );
}

export default withSearch(CocktailList);