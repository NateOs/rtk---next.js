import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#65350F",
  size: 32,
  status: "available",
  featuredImage: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
	reducers: {
	    changeColor: (state, action) => {
			state.value += action.payload
		  },
  },
});

// Action creators are generated for each case reducer function
export const {changeColor} = productSlice.actions;

export default productSlice.reducer;
