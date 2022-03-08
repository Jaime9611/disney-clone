import { createSlice } from '@reduxjs/toolkit';
import { getUser, signOutUser } from '../../api/queries';

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

export const userLogin =
  (user = null) =>
  async (dispatch) => {
    if (!user) {
      const userInfo = await getUser();
      const { user } = userInfo;
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

export default userSlice.reducer;
