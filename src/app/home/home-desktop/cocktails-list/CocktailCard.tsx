import { FC } from 'react';
import { CardText, Cocktail } from './styles';
import { HomeCocktail } from '../../context/types';
import { CardContent, CardMedia, Tooltip } from '@mui/material';

export interface CocktailCardProps {
  cocktail: HomeCocktail;
}

const CocktailCard: FC<CocktailCardProps> = ({ cocktail }) => {
  const [firstIMeasure] = cocktail.measures;

  return (
    <Tooltip title={cocktail.name}>
      <Cocktail>
        <CardMedia
          sx={{ height: 250 }}
          image={cocktail.thumb}
          title={cocktail.name}
        />

        <CardContent>
          <CardText gutterBottom variant="h6" marginBottom={0}>
            {cocktail.name}
          </CardText>

          <CardText variant="body2" color="text.secondary">
            {firstIMeasure ? `${firstIMeasure.ingredient.name} -` : ''} {cocktail.category}
          </CardText>
        </CardContent>
      </Cocktail>
    </Tooltip>
  )
};

export default CocktailCard;