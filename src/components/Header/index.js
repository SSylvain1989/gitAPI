import React from 'react';
import githubLogo from 'src/assets/images/logo-github.png';
import './style.scss';

const Header = () => (
  <header className="header">
    <img src={githubLogo} alt="Github search" />
  </header>
);

export default Header;
