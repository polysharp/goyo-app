import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ children }) => (
  <div
    className="relative min-h-screen bg-gray-200 shadow-lg"
    style={{
      width: 'calc(100% - 70px)',
      marginLeft: '70px',
      borderTopLeftRadius: '1.5rem',
    }}
  >
    {children}
  </div>
);

Board.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Board;
