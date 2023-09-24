'use client';

import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';

const CocktailPage: FC = () => {
  const params = useParams();
  return (
    <main>
      {JSON.stringify(params, null, 2)}
    </main>
  );
}

export default CocktailPage;
