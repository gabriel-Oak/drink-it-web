import { styled } from '@mui/material';
import Link from 'next/link';
import theme from '../../theme';

export const Root = styled('nav')`
  margin-bottom: 16px;
`;

export const BreadLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.text.primary};

  :hover {
    text-decoration: underline;
  }
`;