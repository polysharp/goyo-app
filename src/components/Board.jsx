import React from 'react';

const Board = ({ children }) => (
  <div
    className="relative min-h-screen bg-white rounded-tl-lg rounded-bl-lg shadow-lg "
    style={{ width: 'calc(100% - 70px)', marginLeft: '70px' }}
  >
    {children}
  </div>
);

export default Board;
