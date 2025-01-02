import React, { useState } from 'react';

// Interface
import ItemGrid from 'interface/common/ItemGrid';

// MUI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2 as Grid,
} from '@mui/material';

// Redux
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

const Inventory: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const inventory = useSelector((state: RootState) => state.inventory);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color='inherit' onClick={handleOpen}>
        Inventory
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inventory</DialogTitle>
        <DialogContent
          sx={{
            minHeight: '300px',
            minWidth: '80vw',
          }}
        >
          <Grid container spacing={1} sx={{ p: 1 }}>
            <ItemGrid items={inventory} source='inventory' />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Inventory;
