import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavMenu, Logo, UserImg } from './Navbar.styles';

const Navbar = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="disney logo" />
      <NavMenu>
        <Link to="/">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </Link>
        <Link to="/">
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </Link>
        <Link to="/">
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>WATCH LIST</span>
        </Link>
        <Link to="/">
          <img src="/images/original-icon.svg" alt="Original" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="/">
          <img src="/images/movie-icon.svg" alt="Movie" />
          <span>MOVIES</span>
        </Link>
        <Link to="/">
          <img src="/images/series-icon.svg" alt="Series" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserImg src="/images/profile-img.jpg" alt="User profile" />
    </Nav>
  );
};

export default Navbar;
