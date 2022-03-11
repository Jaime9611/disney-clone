import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setDemoLogout } from '../../../redux/user/userSlice';

import Menu from '../Menu/Menu';

import { UserImg, SignOut, DropDown } from '../Navbar.styles';

const MenuDemo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Demo Logic
  const handleDemoLogout = () => {
    dispatch(setDemoLogout());
    navigate('/');
  };

  return (
    <Menu>
      <SignOut>
        <UserImg src="/images/demo-login.jpeg" alt="profile pic" />
        <DropDown>
          <span onClick={handleDemoLogout}>Sign out</span>
        </DropDown>
      </SignOut>
    </Menu>
  );
};

export default MenuDemo;
