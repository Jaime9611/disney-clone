import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/queries';

const initialState = {
  userName: '',
  email: '',
  photo: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogout: (state, action) => {
      state.userName = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const userLogin = () => async (dispatch) => {
  const userInfo = await getUser();
  console.log(userInfo.user);
  if (userInfo) {
    dispatch(
      setUserLogin({
        userName: userInfo.user.displayName,
        email: userInfo.user.email,
        photo: userInfo.user.photoURL,
      }),
    );
  }
};

export const selectUserName = (state) => state.user.userName;
export const selectUseEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
