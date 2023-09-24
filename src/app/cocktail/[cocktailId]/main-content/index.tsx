import { FC } from 'react';
import { CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { CocktailCard, Divider, Measure, MeasureList, Root } from './styles';
import { useCocktail } from '../context';

const MainContent: FC = () => {
  const { cocktail } = useCocktail();

  return (
    <Root>
      <CocktailCard>
        <CardContent>
          {cocktail.loading ? (
            <>
              <Skeleton width="50%" height={40} />
              <Skeleton width="30%" />
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h6" component="div" marginBottom={0}>
                {cocktail.error ? 'Oops!' : cocktail.data?.name}
              </Typography>

              <Typography variant="body2" fontWeight={500}>
                {cocktail.error ? 'Couldn\'t find the cocktail' : cocktail.data?.category}
              </Typography>
            </>
          )}
        </CardContent>

        {cocktail.loading ? (
          <Skeleton
            width="100%"
            height={250}
            variant="rectangular"
          />
        ) : (
          <CardMedia
            sx={{ height: 250 }}
            image={cocktail.error ? '/img/disconnected.jpeg' : cocktail.data?.thumb}
            title={cocktail.error ? 'Disconnected error' : cocktail.data?.name}
          />
        )}

        <CardContent>
          {cocktail.loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton width="60%" />
            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {cocktail.error ? cocktail.error.message : cocktail.data?.instructions}
            </Typography>
          )}
        </CardContent>

        {cocktail.loading ? (
          <CardContent>
            <Skeleton width="32%" />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </CardContent>
        ) : !!cocktail.data?.measures.length && (
          <CardContent>
            <Typography variant="body1" fontWeight={500}>
              Measures:
            </Typography>

            <MeasureList>
              {cocktail.data?.measures.map(({ measure, ingredient }) => (
                <Measure key={ingredient.name}>
                  <Typography variant="body2">
                    {ingredient.name}
                  </Typography>

                  <Divider />

                  <Typography variant="body2">
                    {measure}
                  </Typography>
                </Measure>
              ))}
            </MeasureList>
          </CardContent>
        )}
      </CocktailCard>
    </Root >
  );
}

export default MainContent;