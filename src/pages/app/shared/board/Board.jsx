import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ children }) => (
  <div
    style={{
      width: 'calc(100% - 60px)',
      height: 'calc(100% - 60px)',
      marginLeft: '60px',
      marginTop: '60px',
      padding: '5px',
    }}
  >
    {children}
  </div>
);

Board.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Board;
