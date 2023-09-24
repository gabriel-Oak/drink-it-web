import { FC } from 'react';
import { CardText, Cocktail, CocktailLink } from './styles';
import { CardContent, CardMedia, Tooltip } from '@mui/material';
import { ShortCocktail } from '../../types/cocktail';

export interface CocktailCardProps {
  cocktail: ShortCocktail;
}

const CocktailCard: FC<CocktailCardProps> = ({ cocktail }) => {
  const [firstIMeasure] = cocktail.measures;

  return (
    <CocktailLink href={`/cocktail/${cocktail.id}`}>
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
    </CocktailLink>
  )
};

export default CocktailCard;