import { FC } from 'react';
import { useHome } from '../../context';
import { CardContent, Typography } from '@mui/material';
import { ButtonsContainer, SectionHeader } from './styles';
import FilterButton from './FilterButton';
import { faBeerMugEmpty, faBlender, faGlassWater, faLemon, faMartiniGlassCitrus, faMartiniGlassEmpty, faMugHot, faMugSaucer, faWhiskeyGlass, faWineBottle, faWineGlass, faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';
import { faMixer } from '@fortawesome/free-brands-svg-icons';

const Filter: FC = () => {
  const { search, cocktails: { loading } } = useHome();

  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" marginBottom={0}>
          Options
        </Typography>
      </CardContent>

      <SectionHeader variant="body2" fontWeight={500}>
        Ingredients
      </SectionHeader>

      <ButtonsContainer>
        <FilterButton type="i" text="Vodka" icon={faMartiniGlassCitrus} />
        <FilterButton type="i" text="Coffee" icon={faMugSaucer} />
        <FilterButton type="i" text="Gin" icon={faMartiniGlassEmpty} />
        <FilterButton type="i" text="Beer" icon={faBeerMugEmpty} />
        <FilterButton type="i" text="Wine" icon={faWineGlass} />
        <FilterButton type="i" text="Whiskey" icon={faWhiskeyGlass} />
        <FilterButton type="i" text="Lemon" icon={faLemon} />
      </ButtonsContainer>

      <SectionHeader variant="body2" fontWeight={500}>
        Category
      </SectionHeader>

      <ButtonsContainer>
        <FilterButton type="c" text="Cocktail" icon={faMartiniGlassCitrus} />
        <FilterButton type="c" text="Ordinary Drink" icon={faGlassWater} />
        <FilterButton type="c" text="Shake" icon={faBlender} />
        <FilterButton type="c" text="Cocoa" icon={faMugHot} />
        <FilterButton type="c" text="Shot" icon={faWhiskeyGlass} />
        <FilterButton type="c" text="Liqueur" icon={faWineBottle} />
        <FilterButton type="c" text="Party Drink" icon={faMartiniGlassEmpty} />
        <FilterButton type="c" text="Coffe / Tea" icon={faMugSaucer} />
        <FilterButton type="c" text="Beer" icon={faBeerMugEmpty} />
        <FilterButton type="c" text="Soft Drink" icon={faWineGlassEmpty} />
      </ButtonsContainer>

      <SectionHeader variant="body2" fontWeight={500}>
        Alcoholic
      </SectionHeader>

      <ButtonsContainer>
        <FilterButton type="a" text="Alcoholic" icon={faMartiniGlassCitrus} />
        <FilterButton type="a" text="Non Alcoholic" icon={faMartiniGlassEmpty} />
      </ButtonsContainer>
    </>
  );
}

export default Filter;
