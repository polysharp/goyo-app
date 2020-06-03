const modalCustomStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
  },
  content: {
    position: 'fixed',
    top: '60px',
    left: 'calc(100vw - 500px)',
    right: 'unset',
    bottom: 'unset',
    margin: 'auto',
    borderRadius: '0.25rem',
    border: 'none',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
    padding: 0,
    maxHeight: 'calc(100vh - 300px)',
    minHeight: '100px',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default modalCustomStyle;
