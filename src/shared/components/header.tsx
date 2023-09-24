import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

const Header: FC = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Drink.it
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
