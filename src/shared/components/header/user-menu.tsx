'use client'

import { FC, useState } from 'react'
import { useAuth } from '../../contexts/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { StyeldCircularProgress, StyledAvatar } from './styles';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const UserMenu: FC = () => {
  const { user, auth, setSingInDialog, setSingUpDialog, signOut } = useAuth();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const handleSignIn = () => {
    setAnchor(null);
    setSingInDialog(true);
  }

  const handleSignUp = () => {
    setAnchor(null);
    setSingUpDialog(true);
  }

  const handleSignOut = () => {
    setAnchor(null);
    signOut();
  }

  return (
    <div>
      <StyledAvatar
        isLoading={user.loading}
        onClick={({ currentTarget }) => setAnchor(currentTarget)}
      >
        {user.data && auth ? user.data.name.slice(0, 2).toUpperCase() : (
          <AccountCircleIcon />
        )}

        {user.loading && <StyeldCircularProgress color="secondary" />}
      </StyledAvatar>

      <Menu
        id="user-menu"
        anchorEl={anchor}
        open={!!anchor}
        onClose={() => setAnchor(null)}
      >
        {user.data && auth ? (
          <div>
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <FavoriteBorderIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Favorites</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Log out</ListItemText>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleSignIn}>Sing In</MenuItem>
            <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
          </div>
        )}
      </Menu >
    </div >
  );
}

export default UserMenu;