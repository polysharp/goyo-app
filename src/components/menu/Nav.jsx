import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { IconButton } from '../library';

const links = [
  {
    id: 0,
    to: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
        />
      </svg>
    ),
  },
  {
    id: 1,
    to: '/renters',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    to: '/properties',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
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
    id: 3,
    to: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5a3 3 0 013-3h10a3 3 0 013 3v16a1 1 0 01-1.447.894L12 18.618l-6.553 3.276A1 1 0 014 21V5zm3-1a1 1 0 00-1 1v14.382l5.553-2.776a1 1 0 01.894 0L18 19.382V5a1 1 0 00-1-1H7z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    to: '/',
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

const Nav = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const current = links.filter((link) => link.to === location.pathname);
    if (current[0]) setSelected(current[0].id);
  }, [location.pathname]);

  return (
    <div className="relative flex-grow">
      <span
        className="absolute w-10 h-10 my-1 transition-transform duration-300 ease-out bg-white rounded-lg shadow"
        style={{ transform: `translateY(calc(100% * ${selected} + 8px * ${selected}))` }}
      />
      <nav className="relative flex flex-col items-center">
        {links.map((link, index) => (
          <IconButton
            key={link.id}
            as={NavLink}
            to={link.to}
            className={`transition-all duration-200 ease-out `}
            selected={selected === index}
            onClick={() => setSelected(index)}
          >
            {link.icon}
          </IconButton>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
