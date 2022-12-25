import { createSlice } from '@reduxjs/toolkit';

const product = createSlice({
  name: 'product',
  initialState: {
    id: 0,
    name: '',
    email: '',
    password: '',
  },
  reducers: {
    setProductSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setProductSlice } = product.actions;
export default product.reducer;
