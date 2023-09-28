import { FC } from 'react';
import { useHome } from '../../context';
import { CardContent, TextField, Typography } from '@mui/material';
import { ButtonsContainer, Form, SectionHeader } from './styles';
import FilterButton from './FilterButton';
import { faBeerMugEmpty, faBlender, faBottleDroplet, faGlassWater, faLemon, faMartiniGlassCitrus, faMartiniGlassEmpty, faMugHot, faMugSaucer, faWhiskeyGlass, faWineBottle, faWineGlass, faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';
import { faMixer } from '@fortawesome/free-brands-svg-icons';

const Filter: FC = () => {
  const {
    cocktails: { loading },
    searchIngredient,
    setSearchIngredient,
    onSubmitIngredient
  } = useHome();

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
        <FilterButton type="i" text="Tequila" icon={faBottleDroplet} />
        <FilterButton type="i" text="Coffee" icon={faMugSaucer} />
        <FilterButton type="i" text="Gin" icon={faMartiniGlassEmpty} />
        <FilterButton type="i" text="Beer" icon={faBeerMugEmpty} />
        <FilterButton type="i" text="Wine" icon={faWineGlass} />
        <FilterButton type="i" text="Whiskey" icon={faWhiskeyGlass} />
        <FilterButton type="i" text="Lemon" icon={faLemon} />
      </ButtonsContainer>

      <Form onSubmit={onSubmitIngredient}>
        <TextField
          label="Search another"
          value={searchIngredient}
          onChange={({ target }) => setSearchIngredient(target.value)}
          size='small'
          fullWidth
          color='primary'
          disabled={loading}
        />
      </Form>

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
        <FilterButton type="c" text="Homemade Liqueur" icon={faBottleDroplet} />
        <FilterButton type="c" text="Coffee / Tea" icon={faMugSaucer} />
        <FilterButton type="c" text="Beer" icon={faBeerMugEmpty} />
        <FilterButton type="c" text="Punch / Party Drink" icon={faMartiniGlassCitrus} />
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
