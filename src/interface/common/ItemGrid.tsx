import React, { useState } from 'react';

// Data
import { Actions, Item } from 'data/items/items';

// Features
import {
  handleExamineItem,
  handleRemoveItemFromInventory,
} from 'features/inventory/inventoryThunks';
import {
  handleDepositItem,
  handleWithdrawItem,
} from 'features/bank/bankThunks';

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
import { AppDispatch } from 'src/app/store';
import { useDispatch } from 'react-redux';

type ItemGridProps = {
  items: {
    item: Item;
    quantity: number;
  }[];
  source: 'inventory' | 'bank';
};

const ItemGrid: React.FC<ItemGridProps> = ({ items, source }) => {
  const [actionOpen, setActionOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<{
    item: (typeof items)[0]['item'];
    index: number;
  } | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleActionOpen = (item: (typeof items)[0]['item'], index: number) => {
    setSelectedItem({ item, index });
    setActionOpen(true);
  };

  const handleActionClose = () => {
    setSelectedItem(null);
    setActionOpen(false);
  };

  const handleAction = (action: Actions) => {
    if (!selectedItem) return;

    const { item, index } = selectedItem;

    switch (action) {
      case 'Use':
        // Dispatch use item
        break;

      case 'Equip':
        // Dispatch equip item
        break;

      case 'Drop':
        dispatch(handleRemoveItemFromInventory(item, 1, index));
        break;

      case 'Examine':
        dispatch(handleExamineItem(item));
        break;

      case 'Deposit':
        dispatch(handleDepositItem(item, 1, index));
        break;

      case 'Withdraw':
        dispatch(handleWithdrawItem(item, 1, index));
        break;

      default:
        alert('Invalid action!');
        break;
    }

    handleActionClose();
  };

  const inventoryActions = () => (
    <>
      {selectedItem?.item.actions.map((action) => (
        <Button
          variant='outlined'
          size='small'
          key={action}
          onClick={() => handleAction(action)}
        >
          {action}
        </Button>
      ))}
      <Button
        variant='outlined'
        size='small'
        onClick={() => handleAction('Deposit')}
      >
        Deposit
      </Button>
    </>
  );

  const bankActions = () => (
    <>
      <Button
        variant='outlined'
        size='small'
        onClick={() => handleAction('Withdraw')}
      >
        Withdraw
      </Button>
      <Button
        variant='outlined'
        size='small'
        onClick={() => handleAction('Examine')}
      >
        Examine
      </Button>
    </>
  );

  return (
    <>
      <Grid container spacing={1} sx={{ p: 1 }}>
        {items.map((items, index) => (
          <Grid size={3} key={index}>
            <Button
              variant='outlined'
              size='small'
              onClick={() => handleActionOpen(items.item, index)}
            >
              {items.item.name} x{items.quantity}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Dialog open={actionOpen} onClose={handleActionClose}>
        <DialogTitle>Actions</DialogTitle>
        <DialogContent>
          {selectedItem && source === 'inventory'
            ? inventoryActions()
            : bankActions()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleActionClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ItemGrid;
