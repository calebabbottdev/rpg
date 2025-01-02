import React from 'react';

// Data
import { Actions } from 'data/items/items';

// Features
import {
  handleExamineItem,
  handleRemoveItemFromInventory,
} from 'features/inventory/inventoryThunk';

// Redux
import { AppDispatch, RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';

const Inventory: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const inventory = useSelector((state: RootState) => state.inventory);

  const handleAction = (
    action: Actions,
    item: (typeof inventory)[0]['item'],
    index: number,
  ) => {
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

      default:
        alert('Invalid action!');
        break;
    }
  };

  return (
    <div
      style={{
        height: '150px',
        border: '1px solid #ccc',
        padding: '8px',
        overflowY: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
      }}
    >
      {inventory.map((items, index) => (
        <div key={index}>
          <p style={{ margin: '0' }}>
            {items.item.name} x{items.quantity}
          </p>
          {items.item.actions.map((action) => (
            <button
              key={action}
              onClick={() => handleAction(action, items.item, index)}
            >
              {action}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Inventory;
