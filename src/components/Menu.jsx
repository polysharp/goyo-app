import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  {
    id: '0',
    to: '/',
    color: 'text-teal-500',
    icon: (
      <svg className={`transition-all ease-out `} viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
        />
      </svg>
    ),
  },
  {
    id: '1',
    to: '/une/route/loin',
    color: 'text-purple-500',
    icon: (
      <svg className={`transition-all ease-out `} viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
        />
      </svg>
    ),
  },
  {
    id: '2',
    to: '/',
    color: 'text-blue-500',
    icon: (
      <svg className={`transition-all ease-out `} viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 11-2 0V8h-7a1 1 0 01-1-1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.707 7.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0L9 12.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0L13 13.586l6.293-6.293a1 1 0 011.414 0z"
        />
      </svg>
    ),
  },
  {
    id: '3',
    to: '/',
    color: 'text-red-500',
    icon: (
      <svg className="transition-all ease-out" viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5a3 3 0 013-3h10a3 3 0 013 3v16a1 1 0 01-1.447.894L12 18.618l-6.553 3.276A1 1 0 014 21V5zm3-1a1 1 0 00-1 1v14.382l5.553-2.776a1 1 0 01.894 0L18 19.382V5a1 1 0 00-1-1H7z"
        />
      </svg>
    ),
  },
  {
    id: '4',
    to: '/',
    color: 'text-indigo-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 11.586l2.536 2.535a1 1 0 11-1.415 1.415l-2.828-2.829A.997.997 0 0111 12V8a1 1 0 112 0v3.586z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 1a1 1 0 011 1v1.998c3.918-2.945 9.506-2.635 13.071.93 3.905 3.906 3.905 10.238 0 14.143-3.905 3.905-10.237 3.905-14.142 0A9.972 9.972 0 012 12a1 1 0 112 0 8 8 0 101.777-5.029A1 1 0 014 6.341V2a1 1 0 011-1z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.293 12.707A.997.997 0 0111 12V8a1 1 0 112 0v3.586l2.536 2.535a1 1 0 11-1.415 1.415l-2.828-2.829zM5.934 1.643A1 1 0 004 2v4.342a1 1 0 001.777.63A8 8 0 114 12v-.001a1 1 0 10-2 0c0 2.558.977 5.119 2.929 7.071 3.905 3.905 10.237 3.905 14.142 0 3.844-3.844 3.904-10.04.18-13.957A10.004 10.004 0 006 3.999V2a.998.998 0 00-.066-.357zM5 2.25z"
        />
      </svg>
    ),
  },
];

const Element = styled.button`
  ${tw`w-10 h-10 rounded-lg focus:outline-none focus:shadow-outline`}
`;

const Menu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="fixed inset-y-0 left-0" style={{ width: '70px' }}>
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-row items-center justify-center w-full h-20">
          <Element
            as={NavLink}
            className="text-white transition-all duration-200 ease-in hover:text-black focus:text-black"
            to="/"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3.887-3.455A6.038,6.038,0,0,1,2.057-2.384a6.005,6.005,0,0,1-2.1.373,5.942,5.942,0,0,1-1.612-.217A6.027,6.027,0,0,1-3.1-2.844,6.275,6.275,0,0,1-4.333-3.8a5.926,5.926,0,0,1-.952-1.231A6.188,6.188,0,0,1-5.9-6.482,5.986,5.986,0,0,1-6.113-8.1,5.9,5.9,0,0,1-5.9-9.706a6.225,6.225,0,0,1,.611-1.448,5.926,5.926,0,0,1,.952-1.231A6.152,6.152,0,0,1-3.1-13.332a6.128,6.128,0,0,1,1.448-.611A5.942,5.942,0,0,1-.043-14.16a6.005,6.005,0,0,1,2.1.373,6.038,6.038,0,0,1,1.829,1.071L2.656-10.665a3.948,3.948,0,0,0-1.231-.849,3.6,3.6,0,0,0-1.468-.308,3.58,3.58,0,0,0-1.448.3,3.856,3.856,0,0,0-1.185.8,3.77,3.77,0,0,0-.8,1.181,3.58,3.58,0,0,0-.3,1.448,3.63,3.63,0,0,0,.3,1.46,3.807,3.807,0,0,0,.8,1.189,3.82,3.82,0,0,0,1.185.8,3.58,3.58,0,0,0,1.448.3,3.473,3.473,0,0,0,.861-.107,3.962,3.962,0,0,0,.8-.3V-8.1H3.887Z"
                transform="translate(13.113 20.16)"
              />
            </svg>
          </Element>
        </div>
        <div className="relative flex-grow">
          <span
            className="absolute w-10 h-10 my-1 transition-transform duration-300 ease-out bg-white rounded-lg shadow"
            style={{ transform: `translateY(calc(100% * ${selected} + 8px * ${selected}))` }}
          />
          <nav className="relative flex flex-col items-center">
            {links.map((link, index) => (
              <Element
                key={link.id}
                as={NavLink}
                to={link.to}
                className={`p-2 my-1 transition-all duration-200 ease-out ${
                  selected === index
                    ? link.color
                    : `text-white focus:${link.color} hover:${link.color}`
                }`}
                onClick={() => setSelected(index)}
              >
                {link.icon}
              </Element>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between w-full mb-2">
          <div className="flex flex-row items-center justify-center pb-3">
            <Element className="text-white transition-all duration-200 ease-in hover:text-pink-500 focus:text-pink-500">
              <FontAwesomeIcon className="text-xl" icon="yen-sign" />
            </Element>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Element className="text-white transition-all duration-200 ease-in hover:text-blue-500 focus:text-blue-500">
              <FontAwesomeIcon className="text-xl" icon="globe" />
            </Element>
          </div>
          <hr className="w-10 mt-5 border-gray-800" />
          <div className="flex flex-row items-center justify-center h-20">
            <button
              type="button"
              className="w-10 h-10 rounded-lg rounded-full focus:outline-none focus:shadow-outline"
            >
              <img
                src="https://api.adorable.io/avatars/285"
                alt="Avatar"
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
