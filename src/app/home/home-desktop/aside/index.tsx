import { FC } from 'react';
import { useHome } from '../../context';
import { FilterCard, Root } from './styles';
import DiscoveryCard from './DiscoveryCard';
import Filter from './Filter';

const Aside: FC = () => {
  const { randomCocktail: { data } } = useHome();

  return (
    <Root>
      <DiscoveryCard />

      <FilterCard>
        <Filter />
      </FilterCard>
    </Root >
  );
}

export default Aside;