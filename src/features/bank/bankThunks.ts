// Constants
import { inventoryFull, mustBeAtBank } from 'src/constants/gameStrings';
import { maxInventorySpace } from 'constants/gameSettings';

// Data
import { Item } from 'data/items/items';

// Features
import { addToBank, removeFromBank } from 'features/bank/bankSlice';
import {
  handleAddItemToInventory,
  handleRemoveItemFromInventory,
} from 'features/inventory/inventoryThunks';
import { addMessage } from 'features/textbox/textboxSlice';

// Redux
import { AppDispatch, RootState } from 'app/store';

export const handleDepositItem =
  (item: Item, quantity: number, index: number) =>
  (dispatch: AppDispatch, getState: () => RootState): void => {
    const { location } = getState().location;

    if (location === 'Town') {
      dispatch(handleRemoveItemFromInventory(item, quantity, index));
      dispatch(addToBank({ item, quantity }));
    } else dispatch(addMessage(mustBeAtBank()));
  };

export const handleWithdrawItem =
  (item: Item, quantity: number, index: number) =>
  (dispatch: AppDispatch, getState: () => RootState): void => {
    const inventory = getState().inventory;

    if (
      inventory.length === maxInventorySpace &&
      (!item.isStackable ||
        !inventory.some((entry) => entry.item.id === item.id))
    ) {
      dispatch(addMessage(inventoryFull()));
    } else {
      dispatch(handleAddItemToInventory(item, quantity));
      dispatch(removeFromBank({ item, quantity, index }));
    }
  };
