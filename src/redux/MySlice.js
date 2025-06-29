import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  count: 1,
};

const MySlice = createSlice({
  name: "MySlice",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.products = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setProduct, setTotal, setCount } = MySlice.actions;
export default MySlice.reducer;
