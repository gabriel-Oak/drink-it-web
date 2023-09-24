import { ApolloError } from "@apollo/client";
import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import { themeConfigs } from "../../../../shared/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const shouldForwardProp = (prop: string) => ![
  'isActive',
  'isLoading',
  'isUpMd',
  'loading',
  'error'
].includes(prop)

interface RootProps {
  isUpMd: boolean;
}

export const Root = styled('aside', { shouldForwardProp }) <RootProps>`
  flex: 1;
  row-gap: 16px;
  ${({ isUpMd }) => isUpMd && 'max-width: 290px;'}
  display: flex;
  flex-direction: column;
`;

interface DiscoveryProps {
  loading: boolean
  error?: ApolloError
};

export const Discovery = styled(Card, { shouldForwardProp }) <DiscoveryProps>`
  border-radius: 16px;
  cursor: ${({ loading, error }) => (loading || !!error ? 'default' : 'pointer')};
`;

export const FilterCard = styled(Card)`
  border-radius: 16px;
`;

export const SectionHeader = styled(Typography)`
  background-color: ${themeConfigs.palette.primary[100]};
  padding: 2px 16px;
`;

export const ButtonsContainer = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
`;

interface ButtonCardProps {
  isActive?: boolean;
  isLoading?: boolean;
}

export const ButtonCard = styled(Card, { shouldForwardProp }) <ButtonCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 8px;
  row-gap: 8px;
  ${({ isLoading }) => isLoading && 'background-color: var(--grey-300);'}
  color: ${({ isLoading }) => isLoading
    ? themeConfigs.palette.primary[200]
    : themeConfigs.palette.primary.main};
  

  ${({ isActive, isLoading }) => isActive ? `
    background-color: ${themeConfigs.palette.primary.main};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    cursor: ${isLoading ? 'progress' : 'default'};
  ` : `
    box-shadow: none;
    border: 1px solid rgba(0,0,0,.12);
    ${isLoading ? 'cursor: not-allowed;' : 'cursor: pointer;'}
    
    &:hover {
      box-shadow: ${!isLoading && '0px 2px 2px 0px rgba(0, 0, 0, 0.25)'};
    }
  `}
`

export const Icon = styled(FontAwesomeIcon, { shouldForwardProp }) <ButtonCardProps>`
  max-height: 44px;
  max-width: 44px;
  width: auto;
  height: auto;
  color: ${({ isActive, isLoading }) => isActive
    ? 'white'
    : isLoading
      ? themeConfigs.palette.primary[200]
      : themeConfigs.palette.primary.main};
`;

export const Label = styled(Typography)`
  width: 100%;
  text-wrap: nowrap;
  overflow: hidden;
  padding: 0 8px;
  text-overflow: ellipsis;
  text-align: center;
`

export const FloatingButton = styled(Button)`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;