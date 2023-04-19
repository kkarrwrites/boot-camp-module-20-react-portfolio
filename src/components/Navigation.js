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
          <a href="/" onClick={() => handlePageChange('About')}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => handlePageChange('Resume')}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlePageChange('Contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
