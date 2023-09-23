import { FC } from 'react';
import { useHome } from '../../context';
import { CardContent, Typography } from '@mui/material';
import { ButtonsContainer, SectionHeader } from './styles';
import FilterButton from './FilterButton';

const Filter: FC = () => {
  const { search, cocktails: { loading } } = useHome();

  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" marginBottom={0}>
          Options
        </Typography>
      </CardContent>

      <SectionHeader variant="body2">
        Ingredients
      </SectionHeader>

      <ButtonsContainer>
        <FilterButton text="Vodka" />
        <FilterButton text="Coffee" />
        <FilterButton text="Gin" />
        <FilterButton text="Beer" />
        <FilterButton text="Wine" />
      </ButtonsContainer>
    </>
  );
}

export default Filter;
