import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1>
        <a href="/" onClick={() => handlePageChange('About')}>
          K. Karr
        </a>
      </h1>
      <ul>
        <li>
          <a
            href="/"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'active' : 'inactive'}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : 'inactive'}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : 'inactive'}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : 'inactive'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
