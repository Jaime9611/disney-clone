import React, { useCallback, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../api';

import {
  selectDemoState,
  selectUserName,
  selectUserPhoto,
  userLogin,
  userLogout,
  setDemoLogin,
  getDemoLogin,
  setDemoLogout,
} from '../../redux/user/userSlice';

import {
  Nav,
  NavMenu,
  Logo,
  UserImg,
  SearchInput,
  Login,
  SignOut,
  DropDown,
  HelpText,
} from './Navbar.styles';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const demoState = useSelector(selectDemoState);
  const navigate = useNavigate();

  const memoizeCallback = useCallback(() => {
    const currentUserState = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(userLogin(user));
            navigate('/home');
          } else {
            navigate('/');
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    currentUserState();
  }, [dispatch, navigate]);

  useEffect(() => {
    const demoLogin = getDemoLogin();

    if (demoLogin) {
      dispatch(setDemoLogin());
    } else {
      memoizeCallback();
    }
  }, [userName, demoState, memoizeCallback, dispatch]);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  const handleLogin = () => {
    dispatch(userLogin());
  };

  const handleDemoLogin = () => {
    dispatch(setDemoLogin());
    navigate('/home');
  };

  const handleDemoLogout = () => {
    dispatch(setDemoLogout());
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?title=${searchTerm}`);
    setSearchTerm('');
    setShowInput(false);
  };

  const handleSearchButtonClick = (event) => {
    setShowInput(() => !showInput);
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      setShowInput(false);
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName && !demoState ? (
        <div className="login-btns">
          <Login onClick={handleLogin}>Login</Login>
          <Login onClick={handleDemoLogin}>Demo</Login>
        </div>
      ) : !userName && demoState ? (
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
          {showInput && (
            <form action="" onSubmit={handleSubmit}>
              <SearchInput>
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  onKeyDown={(event) => handleEscape(event)}
                />
                <HelpText>Press ESC to exit.</HelpText>
              </SearchInput>
            </form>
          )}
        </>
      ) : (
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
            <a href="#originals">
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
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleLogout}>Sign out</span>
            </DropDown>
          </SignOut>
          {showInput && (
            <form action="" onSubmit={handleSubmit}>
              <SearchInput>
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  onKeyDown={(event) => handleEscape(event)}
                />
                <HelpText>Press ESC to exit.</HelpText>
              </SearchInput>
            </form>
          )}
        </>
      )}
    </Nav>
  );
};

export default Navbar;
