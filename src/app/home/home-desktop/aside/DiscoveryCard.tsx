import { FC } from 'react';
import { CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { CocktailLink, Discovery } from './styles';
import { useHome } from '../../context';
import getApolloError from '../../../../shared/utils/get-apollo-error';

const DiscoveryCard: FC = () => {
  const { randomCocktail: { data, loading, error } } = useHome();

  return (
    <CocktailLink href={!data ? '#' : `/cocktail/${data?.id}`}>
      <Discovery
        loading={loading}
        error={error}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" marginBottom={0}>
            Discovery
          </Typography>

          {loading ? (
            <Skeleton width={120} />
          ) : (
            <Typography variant="body2" fontWeight={500}>
              {error ? 'Couldn\'t find a cocktail' : data?.name}
            </Typography>
          )}
        </CardContent>

        {loading ? (
          <Skeleton
            width="100%"
            height={250}
            variant="rectangular"
          />
        ) : (
          <CardMedia
            sx={{ height: 250 }}
            image={error ? '/img/disconnected.jpeg' : data?.thumb}
            title={error ? 'Disconnected error' : data?.name}
          />
        )}

        <CardContent>
          {loading ? (
            <Skeleton width="66%" />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {error
                ? getApolloError(error)
                : `${data?.measures[0]?.ingredient.name} - ${data?.category}`}
            </Typography>
          )}
        </CardContent>
      </Discovery>
    </CocktailLink>
  );
}

export default DiscoveryCard;
