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
import { RootState } from 'src/app/store';
import { useSelector } from 'react-redux';

const Bank: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const bank = useSelector((state: RootState) => state.bank);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color='inherit' onClick={handleOpen}>
        Bank
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bank</DialogTitle>
        <DialogContent
          sx={{
            minHeight: '300px',
            minWidth: '80vw',
          }}
        >
          <Grid container spacing={1} sx={{ p: 1 }}>
            <ItemGrid items={bank} source='bank' />
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

export default Bank;
