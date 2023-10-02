import { styled } from '@mui/material';

export const Root = styled('footer')`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  background: white;
  padding: 64px 24px;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 16px;
`;

export const Left = styled('section')`
  display: flex;
  column-gap: 44px;
`;

export const Right = styled('section')`
  display: flex;
  column-gap: 16px;
`;