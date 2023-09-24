import { Fab, styled } from '@mui/material';
import RootDesktop from '../../../shared/components/root-desktop';

interface RootProps {
  drawer: boolean;
}

export const Root = styled(RootDesktop) <RootProps>`
  ${({ drawer }) => drawer && `
    max-height: 100vh;
    overflow: hidden;
  `}
`;

interface SectionProps {
  isUpMd: boolean;
}

export const Section = styled('section') <SectionProps>`
  margin: auto;
  display: flex;
  flex-direction: ${({ isUpMd }) => isUpMd ? 'row' : 'column'};
  ${({ isUpMd }) => isUpMd ? 'column-gap: 16px;' : 'row-gap: 16px;'};
`;

