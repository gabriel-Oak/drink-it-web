import { Typography, styled } from '@mui/material';

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

export const ErrorCocktails = styled(Typography)`
  flex: 1;
`;
