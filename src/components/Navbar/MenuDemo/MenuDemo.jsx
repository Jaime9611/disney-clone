import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setDemoLogout } from '../../../redux/user/userSlice';

import SearchField from '../SearchField/SearchField';

import { NavMenu, UserImg, SignOut, DropDown } from '../Navbar.styles';

const MenuDemo = () => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Demo Logic
  const handleDemoLogout = () => {
    dispatch(setDemoLogout());
    navigate('/');
  };

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
        <a href="/home/#originals">
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a href="#movies">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="#series">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        <UserImg src="/images/demo-login.jpeg" alt="profile pic" />
        <DropDown>
          <span onClick={handleDemoLogout}>Sign out</span>
        </DropDown>
      </SignOut>
      {showInput && <SearchField setShowInput={setShowInput} />}
    </>
  );
};

export default MenuDemo;
