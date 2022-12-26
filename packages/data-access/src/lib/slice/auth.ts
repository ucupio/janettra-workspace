import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
  reducers: {
    setAuthSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    setTokenSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    setUserSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setUserSlice, setAuthSlice, setTokenSlice } = auth.actions;
export default auth.reducer;
