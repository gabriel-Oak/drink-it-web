import { FC } from 'react';
import { useHome } from '../../context';
import { FilterCard, Root } from './styles';
import DiscoveryCard from './DiscoveryCard';
import Filter from './Filter';
import { useMediaQuery, useTheme } from '@mui/material';
import FilterDrawer from './FilterDrawer';

const Aside: FC = () => {
  const { randomCocktail: { data } } = useHome();
  const { breakpoints } = useTheme();
  const isUpMd = useMediaQuery(breakpoints.up('md'));

  return (
    <Root>
      <DiscoveryCard />

      {isUpMd ? (
        <FilterCard>
          <Filter />
        </FilterCard>
      ) : (
        <FilterDrawer />
      )}
    </Root >
  );
}

export default Aside;