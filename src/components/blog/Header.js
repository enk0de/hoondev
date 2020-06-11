import React from 'react';
import './Header.scss';
import logo from '../../images/blog-logo.svg';

const Header = () => {
  return (
    <div className="blog-header_container padding">
      <div className="center">
        <img className="logo" src={logo}></img>
      </div>
    </div>
  );
};

export default Header;
