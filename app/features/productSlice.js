import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: ["#65350F", "#2DB1A5", "#C7AA00"],
  size: [12, 32, 42, 56],
  status: "available",
  featuredImage: null,
  isBlock: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateColor: (state, action) => {
      // state.color += action.payload;
      console.log(action.payload);
    },
    displayBlock: (state) => {
      if (state.isBlock === true) {
        state.isBlock = false;
      } else {
        state.isBlock = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateColor, displayBlock } = productSlice.actions;

export default productSlice.reducer;
