import React from 'react';

// Features
import Bank from 'features/bank/Bank';
import Inventory from 'features/inventory/Inventory';

// MUI
import { AppBar, Toolbar, Typography } from '@mui/material';

const GameBar: React.FC = () => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            RPG
          </Typography>
          <Inventory />
          <Bank />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default GameBar;
