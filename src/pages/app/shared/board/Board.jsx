import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ children }) => (
  <div className="w-screen h-screen" style={{ paddingTop: '60px', paddingLeft: '60px' }}>
    <div className="w-full h-full overflow-y-auto">{children}</div>
  </div>
);

Board.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Board;
