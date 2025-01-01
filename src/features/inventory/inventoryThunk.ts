// Constants
import { inventoryFull } from 'src/constants/strings';

// Data
import { Item } from 'data/items/items';

// Features
import { addToInventory } from 'features/inventory/inventorySlice';
import { addMessage } from 'features/textbox/textboxSlice';

// Redux
import { AppDispatch, RootState } from 'app/store';

export const handleAddItemToInventory =
  (item: Item, quantity: number) =>
  (dispatch: AppDispatch, getState: () => RootState): void => {
    const inventory = getState().inventory;

    if (inventory.length === 28) {
      dispatch(addMessage(inventoryFull()));
    } else {
      dispatch(addToInventory({ item, quantity }));
    }
  };
