import * as React from 'react';

import './Navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            style={{
              display: 'flex',
              fontFamily: 'Verdana, Geneva, Tahoma, sansSerif',
              fontSize: 'large',
            }}
          >
            Skou Shop
          </Typography>
          <Button
            color='inherit'
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sansSerif' }}
          >
            Cart
          </Button>
          <Button
            color='inherit'
            style={{ fontFamily: 'Verdana, Geneva, Tahoma, sansSerif' }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
