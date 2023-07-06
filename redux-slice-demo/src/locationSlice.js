import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "locations",
  initialState: {
    locations: ["Balgalore", "Hyderabad", "Delhi"],
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.locations = [...state.locations, payload];
    },
  },
});

const { actions, reducer } = locationSlice;
export const { save } = actions;
export default reducer;
