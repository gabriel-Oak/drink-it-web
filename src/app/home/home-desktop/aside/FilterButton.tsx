import { FC } from 'react';
import { ButtonCard } from './styles';
import { Typography } from '@mui/material';

export interface FilterButtonProps {
  text: string;
  icon?: JSX.Element;
}

const FilterButton: FC<FilterButtonProps> = ({
  text, icon
}) => {

  return (
    <ButtonCard>
      <Typography variant="caption">
        {text}
      </Typography>
    </ButtonCard>
  );
}

export default FilterButton;
