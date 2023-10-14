import { ArrowBack } from '@mui/icons-material';
import { AppBar, Avatar, CircularProgress, IconButton, OutlinedInput, TextField, Toolbar, styled } from '@mui/material';
import theme from '../../theme';

const shouldForwardProp = (prop: string) => ![
  'isLoading'
].includes(prop);

export const IconBack = styled(ArrowBack)`
  color: white;
`;

export const Form = styled('form')`
  margin: auto;
  width: 100%;
  
  ${theme.breakpoints.up('sm')} {
    max-width: 328px;
  }
`;

export const Field = styled(OutlinedInput)`
  input {
    color: white;
  }
  
  fieldset, fieldset:hover {
    border-color: white !important;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: white;
`;

export const StyledAppBar = styled(AppBar)`
  padding: 0 !important;
`;

export const StyledToolbar = styled(Toolbar)`
  column-gap: 16px;

  ${theme.breakpoints.only('xs')} {
    flex-direction: column;
    align-items: start; 
    padding: 8px 16px;
  }
`;

export const ItemsContainer = styled('div')`
  display: flex;
  flex: 1;

  ${theme.breakpoints.only('xs')} {
    width: 100%;
  }
`;

interface StyledAvatarProps { isLoading: boolean }

export const StyledAvatar = styled(Avatar, { shouldForwardProp }) <StyledAvatarProps>`
  cursor: ${({ isLoading }) => isLoading ? 'default' : 'pointer'};
  position: relative;
`;

export const StyeldCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: 0;
  left: 0;
`;