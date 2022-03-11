import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { setDemoLogout } from '../../../redux/user/userSlice';

import Menu from '../Menu/Menu';

import { UserImg, SignOut, DropDown } from '../Navbar.styles';

const MenuDemo = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Demo Logic
  const handleDemoLogout = () => {
    dispatch(setDemoLogout());
    navigate('/');
  };

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useEffect(() => {
    handleShowMenu();
  }, [location]);

  return (
    <Menu setShowMenu={handleShowMenu} showMenu={showMenu}>
      <SignOut onClick={handleShowMenu}>
        <UserImg src="/images/demo-login.jpeg" alt="profile pic" />
        <DropDown>
          <span onClick={handleDemoLogout}>Sign out</span>
        </DropDown>
      </SignOut>
    </Menu>
  );
};

export default MenuDemo;
