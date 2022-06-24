import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styles/components';

const Navbar = () => (
  <StyledNavbar>
    <h1>Prueba Técnica</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </StyledNavbar>
);

export default Navbar;
