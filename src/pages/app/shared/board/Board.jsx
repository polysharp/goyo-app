import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ children }) => (
  <div
    className="relative min-h-screen bg-white rounded-tl-lg rounded-bl-lg shadow-lg "
    style={{ width: 'calc(100% - 70px)', marginLeft: '70px' }}
  >
    {children}
  </div>
);

Board.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Board;
