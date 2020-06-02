import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { EaseIn } from 'components';

const Topbar = ({ openUserProfileModal }) => (
  <div className="fixed inset-x-0 top-0 bg-white border-b h-15">
    <div className="flex flex-row items-center justify-between h-full">
      <div
        className="flex flex-col items-center justify-center border-r w-15"
        style={{ padding: '10px' }}
      >
        <NavLink to="/" className="w-full h-full text-gray-300 hover:text-black">
          <EaseIn>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3.887-3.455A6.038,6.038,0,0,1,2.057-2.384a6.005,6.005,0,0,1-2.1.373,5.942,5.942,0,0,1-1.612-.217A6.027,6.027,0,0,1-3.1-2.844,6.275,6.275,0,0,1-4.333-3.8a5.926,5.926,0,0,1-.952-1.231A6.188,6.188,0,0,1-5.9-6.482,5.986,5.986,0,0,1-6.113-8.1,5.9,5.9,0,0,1-5.9-9.706a6.225,6.225,0,0,1,.611-1.448,5.926,5.926,0,0,1,.952-1.231A6.152,6.152,0,0,1-3.1-13.332a6.128,6.128,0,0,1,1.448-.611A5.942,5.942,0,0,1-.043-14.16a6.005,6.005,0,0,1,2.1.373,6.038,6.038,0,0,1,1.829,1.071L2.656-10.665a3.948,3.948,0,0,0-1.231-.849,3.6,3.6,0,0,0-1.468-.308,3.58,3.58,0,0,0-1.448.3,3.856,3.856,0,0,0-1.185.8,3.77,3.77,0,0,0-.8,1.181,3.58,3.58,0,0,0-.3,1.448,3.63,3.63,0,0,0,.3,1.46,3.807,3.807,0,0,0,.8,1.189,3.82,3.82,0,0,0,1.185.8,3.58,3.58,0,0,0,1.448.3,3.473,3.473,0,0,0,.861-.107,3.962,3.962,0,0,0,.8-.3V-8.1H3.887Z"
                transform="translate(13.113 20.16)"
              />
            </svg>
          </EaseIn>
        </NavLink>
      </div>
      <div className="flex flex-row items-center justify-end flex-grow h-full mr-2">
        <div className="flex flex-col items-center justify-center w-15">
          <button
            type="button"
            className="w-full h-full p-4 text-gray-300 hover:text-black"
            onClick={() => openUserProfileModal(true)}
          >
            <EaseIn>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
            </EaseIn>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <button type="button" className="w-full h-full p-2 text-gray-300 hover:text-black">
            <div className="flex flex-row items-center justify-between">
              <img
                src="https://api.adorable.io/avatars/280"
                className="h-8 mr-2 rounded-full shadow"
                alt="You"
              />
              <EaseIn>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 transform rotate-90"
                >
                  <path
                    fillRule="evenodd"
                    d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                  />
                </svg>
              </EaseIn>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  openUserProfileModal: PropTypes.func.isRequired,
};

export default Topbar;
