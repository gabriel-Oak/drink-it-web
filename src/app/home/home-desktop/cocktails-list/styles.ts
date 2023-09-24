import { Card, Typography, styled } from '@mui/material';
import Link from 'next/link';

export const Root = styled('article')`
  flex: 1;
`;

interface ContainerProps {
  isDownSm: boolean;
}

export const Container = styled('section') <ContainerProps>`
  display: grid;
  grid-template-columns: ${({ isDownSm }) => isDownSm ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 16px;
  row-gap: 16px;
`;

export const Cocktail = styled(Card)`
  border-radius: 16px;
  cursor: pointer;
`;

export const CardText = styled(Typography)`
  width: 100%;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  overflow: hidden;
`;

export const ErrorCocktails = styled(Typography)`
  flex: 1;
`;

export const CocktailLink = styled(Link)`
  display: contents;
`;