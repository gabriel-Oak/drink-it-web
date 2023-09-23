import { FC } from 'react';
import { useHome } from '../../context';
import { Root } from './styles';

const CocktailsList: FC = () => {
  const { cocktails } = useHome();

  return (
    <Root>
      Lista
    </Root>
  );
}

export default CocktailsList;
