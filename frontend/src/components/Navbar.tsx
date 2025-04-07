import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          CineNiche
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/movies"
              className={`nav-link ${location.pathname.includes('/movies') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Movies
            </Link>
          </li>

          <li className="nav-item login-register">
            <Link
              to="/login"
              className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>

          <li className="nav-item login-register">
            <Link
              to="/register"
              className={`nav-link btn-primary ${location.pathname === '/register' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
