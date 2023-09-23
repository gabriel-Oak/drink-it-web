import { FC } from 'react';
import { useHome } from '../../context';
import { Container, Root } from './styles';
import CocktailCard from './CocktailCard';
import { useMediaQuery, useTheme } from '@mui/material';

const CocktailsList: FC = () => {
  const { cocktails } = useHome();
  const { breakpoints } = useTheme();
  const isDownSm = useMediaQuery(breakpoints.down('sm'));

  return (
    <Root>
      <Container isDownSm={isDownSm}>
        {cocktails.data && cocktails.data?.map((cocktail) => (
          <CocktailCard
            key={cocktail.id}
            cocktail={cocktail}
          />
        ))}
      </Container>
    </Root>
  );
}

export default CocktailsList;
