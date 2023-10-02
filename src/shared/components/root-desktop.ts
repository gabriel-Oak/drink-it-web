import { styled } from '@mui/material';
import theme from '../theme';

interface RootDesktopProps {
  thumb?: string;
}

const RootDesktop = styled('main') <RootDesktopProps>`
  padding-top: 86px;
  min-height: 100vh;

  ${theme.breakpoints.down('sm')} {
    padding-top: 112px;
  }

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

export default RootDesktop