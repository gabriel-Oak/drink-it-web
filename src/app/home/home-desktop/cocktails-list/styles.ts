import { Typography, styled } from '@mui/material';
import theme from '../../../../shared/theme';

export const Root = styled('article')`
  flex: 1;
`;

export const Container = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;

  ${theme.breakpoints.only('sm')} {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.breakpoints.only('xs')} {
    grid-template-columns: 1fr;
  }
`;

export const ErrorCocktails = styled(Typography)`
  flex: 1;
`;
