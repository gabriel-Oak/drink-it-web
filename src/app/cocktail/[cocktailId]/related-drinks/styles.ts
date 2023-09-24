import { Typography, styled } from '@mui/material';
import theme from '../../../../shared/theme';

export const Root = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;

  ${theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
  }
`;

export const ErrorCocktails = styled(Typography)`
  flex: 1;
`;
