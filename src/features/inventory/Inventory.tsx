import React from 'react';

// Redux
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

const Inventory: React.FC = () => {
  const inventory = useSelector((state: RootState) => state.inventory);

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
        <p key={index} style={{ margin: '0' }}>
          {items.item.name} x{items.quantity}
        </p>
      ))}
    </div>
  );
};

export default Inventory;
