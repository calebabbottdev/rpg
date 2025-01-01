import React, { useEffect, useRef } from 'react';

// Redux
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

const Textbox: React.FC = () => {
  const messages = useSelector((state: RootState) => state.textbox.messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      style={{
        height: '150px',
        border: '1px solid #ccc',
        padding: '8px',
        overflowY: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
      }}
    >
      {messages.map((message, index) => (
        <p key={index} style={{ margin: '0' }}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default Textbox;
