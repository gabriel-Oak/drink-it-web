import { FC } from 'react';
import { ButtonCard, Icon, Label } from './styles';
import { Tooltip } from '@mui/material';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useHome } from '../../context';

export interface FilterButtonProps {
  text: string;
  icon: IconDefinition;
  type: string;
}

const FilterButton: FC<FilterButtonProps> = ({
  text, icon, type
}) => {
  const { cocktails: { loading }, search, getCocktails } = useHome();
  const isActive = search[type] === text;

  return (
    <Tooltip title={text}>
      <ButtonCard
        isActive={isActive}
        isLoading={loading}
        onClick={() => !loading && !isActive && getCocktails({ [type]: text })}
      >
        <Icon
          icon={icon}
          isActive={isActive}
          isLoading={loading}
        />

        <Label variant="caption">
          {text}
        </Label>
      </ButtonCard>
    </Tooltip>
  );
}

export default FilterButton;
