import { FC } from 'react';
import { Cocktail } from './styles';
import { CardContent, Skeleton } from '@mui/material';

const CocktailCardSkeleton: FC = () => (
  <Cocktail>
    <Skeleton
      width="100%"
      height={220}
      variant="rectangular"
    />

    <CardContent>
      <Skeleton width="72%" />

      <Skeleton width="48%" />
    </CardContent>
  </Cocktail>
)

export default CocktailCardSkeleton;