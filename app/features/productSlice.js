import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: ["#65350F", "#5B2126", "#5B2126"],
  size: [12, 32, 42, 56],
  status: "available",
  featuredImage: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor } = productSlice.actions;

export default productSlice.reducer;
