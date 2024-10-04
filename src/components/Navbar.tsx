import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="p-4">
      <ul className="flex space-x-4 justify-end">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`text-sm font-medium ${
                location.pathname === item.path ? 'text-accent' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;