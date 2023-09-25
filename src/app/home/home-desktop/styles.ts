import { Fab, styled } from '@mui/material';
import RootDesktop from '../../../shared/components/root-desktop';
import theme from '../../../shared/theme';

const shouldForwardProp = (prop: string) => ![
  'drawer'
].includes(prop);

interface RootProps {
  drawer: boolean;
}

export const Root = styled(RootDesktop, { shouldForwardProp }) <RootProps>`
  ${({ drawer }) => drawer && `
    max-height: 100vh;
    overflow: hidden;
  `}
`;

export const Section = styled('section')`
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  column-gap: 16px;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

