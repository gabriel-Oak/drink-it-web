import { ApolloError } from "@apollo/client";
import { Card, CardContent, Typography, styled } from "@mui/material";
import { themeConfigs } from "../../../../shared/theme";

export const Root = styled('aside')`
  flex: 1;
  row-gap: 16px;
  max-width: 290px;
  display: flex;
  flex-direction: column;
`;

interface DiscoveryProps {
  loading: boolean
  error?: ApolloError
};

export const Discovery = styled(Card) <DiscoveryProps>`
  border-radius: 16px;
  cursor: ${({ loading, error }) => (loading || !!error ? 'default' : 'pointer')};;
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

export interface ButtonCardProps {
  isActive?: boolean;
}

export const ButtonCard = styled(Card) <ButtonCardProps>`
  display: flex;
  flex-direction: column;
  column-gap: 10;
  justify-content: flex-end;
  align-items: center;
  color: ${themeConfigs.palette.primary.main};

  ${({ isActive }) => isActive ? `
    background-color: ${themeConfigs.palette.primary.main};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
  ` : `
    box-shadow: none;
    border: 1px solid rgba(0,0,0,.12);
    cursor: pointer;
    
    &:hover {
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
    }
  `}

`
