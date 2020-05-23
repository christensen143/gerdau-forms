import React from 'react';

import { Image } from 'react-bootstrap';

import logoImg from '../../images/2025930.png';

import './Header.css';

const Header = () => {
  return (
    <header className="p-4 header">
      <Image
        className="mx-auto d-block"
        src={logoImg}
        alt="Gerdau Logo"
        width="160px"
        height="46px"
      />
    </header>
  );
};

export default Header;
