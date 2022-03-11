import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavMenu } from '../Navbar.styles';
import SearchField from '../SearchField/SearchField';

const Menu = ({ children }) => {
  const [showInput, setShowInput] = useState(false);

  const handleSearchButtonClick = (event) => {
    setShowInput(() => !showInput);
  };

  return (
    <>
      <NavMenu>
        <Link to="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </Link>
        <div onClick={handleSearchButtonClick}>
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </div>
        <Link to="/search?type=original">
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="/search?type=movie">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </Link>
        <Link to="/search?type=serie">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      {children}
      {showInput && <SearchField setShowInput={setShowInput} />}
    </>
  );
};

export default Menu;
