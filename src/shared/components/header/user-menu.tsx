'use client'

import { FC, useState } from 'react'
import { useAuth } from '../../contexts/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { StyledAvatar } from './styles';

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
        onClick={({ currentTarget }) => setAnchor(currentTarget)}
      >
        {user.data && auth ? user.data.name.slice(0, 2).toUpperCase() : (
          <AccountCircleIcon />
        )}
      </StyledAvatar>

      <Menu
        id="user-menu"
        anchorEl={anchor}
        open={!!anchor}
        onClose={() => setAnchor(null)}
      >
        {user.data && auth ? (
          <div>
            <MenuItem onClick={handleSignOut}>Favorites</MenuItem>
            <MenuItem onClick={handleSignOut}>Profile</MenuItem>
            <MenuItem onClick={handleSignOut}>Logout</MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleSignIn}>Sing In</MenuItem>
            <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}

export default UserMenu;