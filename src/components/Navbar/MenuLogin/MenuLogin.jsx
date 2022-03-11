import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto } from '../../../redux/user/userSlice';

import { userLogout } from '../../../redux/user/userSlice';

import { UserImg, SignOut, DropDown } from '../Navbar.styles';
import Menu from '../Menu/Menu';

const MenuLogin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Login logic
  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <Menu setShowMenu={handleShowMenu} showMenu={showMenu}>
      <SignOut onClick={handleShowMenu}>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
          <span onClick={handleLogout}>Sign out</span>
        </DropDown>
      </SignOut>
    </Menu>
  );
};

export default MenuLogin;
