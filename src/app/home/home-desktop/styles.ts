import { Fab, styled } from '@mui/material';

interface RootProps {
  drawer: boolean;
  thumb?: string;
}

export const Root = styled('main') <RootProps>`
  padding-top: 96px;
  ${({ drawer }) => drawer && `
    max-height: 100vh;
    overflow: hidden;
  `}

  ${({ thumb }) => thumb && `
    &::before {    
      content: "";
      background-image: url(${thumb});
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: -1;
      position: fixed;
      height: 100vh;
      width: 100vw;
    }
  `};
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

