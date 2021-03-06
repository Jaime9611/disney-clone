import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../api';

import {
  selectDemoState,
  selectUserName,
  userLogin,
  setDemoLogin,
  getDemoLogin,
} from '../../redux/user/userSlice';

import MenuDemo from './MenuDemo/MenuDemo';
import MenuLogin from './MenuLogin/MenuLogin';

import { Nav, Logo, Login } from './Navbar.styles';

const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const demoState = useSelector(selectDemoState);
  const navigate = useNavigate();

  const memoizeCallback = useCallback(() => {
    const currentUserState = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(userLogin(user));
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    currentUserState();
  }, [dispatch]);

  useEffect(() => {
    if (!demoState || !userName) {
      const demoLogin = getDemoLogin();
      if (demoLogin) {
        dispatch(setDemoLogin());
      } else {
        memoizeCallback();
      }
    }
  }, [userName, demoState, memoizeCallback, dispatch, navigate]);

  const handleLogin = () => {
    dispatch(userLogin());
    navigate('/home');
  };

  const handleDemoLogin = () => {
    dispatch(setDemoLogin());
    navigate('/home');
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
        <MenuDemo />
      ) : (
        <MenuLogin />
      )}
    </Nav>
  );
};

export default Navbar;
