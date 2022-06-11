import React, { Ref, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useAuth } from '../../../contexts/auth.context';

const PREFIX = 'header';
const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled(MuiAppBar)(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '64px !important',
    background: '#fff',
    color: theme.palette.text.primary,
    '& .MuiToolbar-root': {
      height: '64px !important',
      padding: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& button': {
      textTransform: 'capitalize',
      color: theme.palette.text.primary,
    }
  }
}));

const Header = () => {
  const { logout, me } = useAuth();

  const buttonRef: Ref<any> = useRef();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
  };

  const menuItems = [
    { label: 'Sign out', onClick: handleLogout },
  ];

  return (
    <Root className={classes.root} position="fixed">
      <Toolbar>
        <Box sx={{display: 'flex'}}>
          <Typography variant="h4">Test</Typography>
        </Box>
        <Button
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          startIcon={<PersonIcon />}
          ref={buttonRef}
          disableElevation
        >
          { me.email }
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={2}
        >
          {
            menuItems.map((item, key) => (
              <MenuItem onClick={item.onClick} key={key}>{item.label}</MenuItem>
            ))
          }
        </Menu>
      </Toolbar>
    </Root>
  );
};

export default Header;
