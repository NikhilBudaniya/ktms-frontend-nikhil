import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

export const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user } = action.payload;
      if (user !== null) {
        state.user = user;
        state.isAuth = true;
        return;
      } else return (state.isAuth = false);
    },
    setLogout: (state, action) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setAuth, setLogout } = AuthSlice.actions;

export default AuthSlice.reducer;
