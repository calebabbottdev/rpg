// Constants
import { inventoryFull } from 'src/constants/gameStrings';
import { maxInventorySpace } from 'constants/gameSettings';

// Data
import { Item } from 'data/items/items';

// Features
import {
  addToInventory,
  removeFromInventory,
} from 'features/inventory/inventorySlice';
import { addMessage } from 'features/textbox/textboxSlice';

// Redux
import { AppDispatch, RootState } from 'app/store';

export const handleAddItemToInventory =
  (item: Item, quantity: number) =>
  (dispatch: AppDispatch, getState: () => RootState): void => {
    const inventory = getState().inventory;

    if (
      inventory.length === maxInventorySpace &&
      (!item.isStackable ||
        !inventory.some((entry) => entry.item.id === item.id))
    ) {
      dispatch(addMessage(inventoryFull()));
    } else {
      dispatch(addToInventory({ item, quantity }));
    }
  };

export const handleRemoveItemFromInventory =
  (item: Item, quantity: number, index: number) =>
  (dispatch: AppDispatch): void => {
    dispatch(removeFromInventory({ item, quantity, index }));
  };

export const handleExamineItem =
  (item: Item) =>
  (dispatch: AppDispatch): void => {
    dispatch(addMessage(item.description));
  };
