import { FC } from 'react';
import { Root } from './styles';
import { Typography } from '@mui/material';

const Footer: FC = () => (
  <Root>
    <Typography variant="body1" fontWeight={500}>
      Drink.it
    </Typography>

    <Typography variant="body1">
      By Gabriel Oak.
    </Typography>
  </Root>
);

export default Footer;