import { AppBar, Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { IconBack, ItemsContainer, StyledToolbar } from './styles';
import Search from './search';

const Header: FC = () => {
  const { back } = useRouter();

  return (
    <AppBar>
      <StyledToolbar>
        <Box display="flex" alignItems="center">
          {global.history?.length > 1 && (
            <Box mr={2}>
              <IconButton onClick={back}>
                <IconBack />
              </IconButton>
            </Box>
          )}

          <Typography variant="h6" component="div">
            Drink.it
          </Typography>
        </Box>

        <ItemsContainer >
          <Search />

          <div />
        </ItemsContainer>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
