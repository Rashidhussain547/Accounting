import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen] = useState(false);

  return (
      <nav className="navbar">
      <div className="navbar-brand">Accounting Project</div>
      <ul className={`menu-items ${menuOpen ? 'show' : ''}`}>
      <li>
            <a href="/">Journal Entries</a>
      </li>
        <li><a href="./Trail">Trail Balance</a></li>
        <li>
          Financial Statement
          <ul className="submenu">
            <li><a href="./Income">Income Statement</a></li>
            <li><a href="./OE">Owner Equity Statement</a></li>
            <li><a href="./Balance">Balance Sheet</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
