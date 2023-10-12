import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { IconBack, ItemsContainer, StyledAppBar, StyledToolbar } from './styles';
import Search from './search';
import UserMenu from './user-menu';

const Header: FC = () => {
  const { back } = useRouter();

  return (
    <StyledAppBar >
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

          <UserMenu />
        </ItemsContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
