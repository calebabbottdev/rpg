import React from 'react';

// Data
import { Actions } from 'data/items/items';

// Features
import { handleWithdrawItem } from 'features/bank/bankThunks';
// Redux
import { AppDispatch, RootState } from 'src/app/store';
import { useDispatch, useSelector } from 'react-redux';

const Bank: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bank = useSelector((state: RootState) => state.bank);

  const handleAction = (
    action: Actions,
    item: (typeof bank)[0]['item'],
    index: number
  ) => {
    switch (action) {
      case 'Withdraw':
        dispatch(handleWithdrawItem(item, 1, index));
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
      Bank
      {bank.map((items, index) => (
        <div key={index}>
          <p style={{ margin: '0' }}>
            {items.item.name} x{items.quantity}
          </p>
          <button onClick={() => handleAction('Withdraw', items.item, index)}>
            Withdraw
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bank;
