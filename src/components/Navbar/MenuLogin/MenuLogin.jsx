import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto } from '../../../redux/user/userSlice';

import { userLogout } from '../../../redux/user/userSlice';

import { UserImg, SignOut, DropDown } from '../Navbar.styles';
import Menu from '../Menu/Menu';

const MenuLogin = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Login logic
  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  return (
    <Menu>
      <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
          <span onClick={handleLogout}>Sign out</span>
        </DropDown>
      </SignOut>
    </Menu>
  );
};

export default MenuLogin;
