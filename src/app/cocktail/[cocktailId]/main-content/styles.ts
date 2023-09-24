import { Card, styled } from '@mui/material';

export const Root = styled('article')`

`;

export const CocktailCard = styled(Card)`
  border-radius: 16px;
`;

export const MeasureList = styled('ul')`
  row-gap: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Measure = styled('li')`
  display: flex;
  column-gap: 4px;
`;

export const Divider = styled('div')`
  flex: 1;
  border-bottom: 1px #9b9b9b dotted;
  position: relative;
  top: -6px;
`;