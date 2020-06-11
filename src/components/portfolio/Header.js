import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';
import logo from '../../images/logo.svg';
import { HamburgerButton } from 'react-hamburger-button';

const Header = () => {
  const btnMargin = {
    marginRight: '25px',
  };
  const [open, setOpen] = useState(false);
  const onClickHamburger = useCallback(() => {
    setOpen((open) => !open);
  }, []);
  return (
    <div className="header_container">
      <div className="navbar_left">
        <div className="hamburger-btn" onClick={onClickHamburger}>
          <HamburgerButton
            open={open}
            width={16}
            height={12}
            strokeWidth={2}
            color="black"
            animationDuration={0.2}
          />
        </div>

        <Link to="/blog" className="menu">
          BLOG
        </Link>
      </div>
      <div className="navbar_center">
        <img className="logo" src={logo}></img>
      </div>
      <div className="navbar_right">
        <a
          href="https://github.com/huneeeee"
          className="static_btn rounded pb narrow"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Header;
