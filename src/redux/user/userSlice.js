import { createSlice } from '@reduxjs/toolkit';
import { getUser, signOutUser } from '../../api/queries';

const initialState = {
  userName: '',
  email: '',
  photo: '',
  demoLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.demoLogin = false;
    },
    setUserLogout: (state, action) => {
      state.userName = null;
      state.email = null;
      state.photo = null;
      state.demoLogin = false;
    },
    setDemoLogin: (state, action) => {
      state.demoLogin = true;
    },
    setDemoLogout: (state, action) => {
      state.demoLogin = false;
    },
  },
});

export const { setUserLogin, setUserLogout, setDemoLogin, setDemoLogout } =
  userSlice.actions;

export const userLogin =
  (user = null) =>
  async (dispatch) => {
    if (!user) {
      const userInfo = await getUser();
      const user = userInfo.user;
    }
    if (user) {
      dispatch(
        setUserLogin({
          userName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
    }
  };

export const userLogout = () => async (dispatch) => {
  await signOutUser();
  dispatch(setUserLogout());
};

export const selectUserName = (state) => state.user.userName;
export const selectUseEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectDemoState = (state) => state.user.demoLogin;

export default userSlice.reducer;
