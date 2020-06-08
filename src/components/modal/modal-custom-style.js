const modalCustomStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(34, 34, 34, .6)',
    zIndex: '999',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0.25rem',
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.28) 0px 8px 28px',
    padding: 0,
    maxHeight: '90%',
    maxWidth: '1032px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default modalCustomStyle;
