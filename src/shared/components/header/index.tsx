import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { IconBack } from './styles';

const Header: FC = () => {
  const { back } = useRouter();

  return (
    <AppBar>
      <Toolbar>
        {global.history.length > 1 && (
          <Box mr={2}>
            <IconButton onClick={back}>
              <IconBack />
            </IconButton>
          </Box>
        )}


        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Drink.it
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
