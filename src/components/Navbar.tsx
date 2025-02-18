import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cuboid as Cube, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/tema';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 shadow-lg transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Cube className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">3D JVarte</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${location.pathname === item.href ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors duration-200 font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
              >
                {item.name}
              </Link>
            ))}

            {/* Dark Mode Switch */}
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-500">
              {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-800" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === item.href ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-800' : 'hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Dark Mode Switch (Mobile) */}
            <button onClick={toggleDarkMode} className="mt-2 px-3 py-2 rounded-md flex items-center bg-gray-200 dark:bg-gray-700 w-full justify-center transition-colors duration-500">
              {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-800" />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;