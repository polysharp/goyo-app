import React from 'react';
import { ToastContainer as ReactToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const ToastContainer = () => (
  <ReactToast position="bottom-right" limit="3" hideProgressBar newestOnTop />
);

export default ToastContainer;
