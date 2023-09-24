import { Fab, styled } from '@mui/material';

interface RootProps {
  drawer: boolean;
}

export const Root = styled('main') <RootProps>`
  padding-top: 96px;
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

export const Footer = styled('footer')`
  margin-top: 32px;
  background: white;
  padding: 64px 24px;
  display: flex;
  column-gap: 44px;
`;
