import { styled } from '@mui/material';
import theme from '../../../shared/theme';

export const Content = styled('section')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 16px;
  row-gap: 16px;

  ${theme.breakpoints.down('md')} {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
  }
`;