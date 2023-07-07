import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    names: ["aman", "ajay", "bikki"],
  },
  reducers: {
    add: (state, params) => {
      console.log("adding name: " + params.payload);
      state.names = [...state.names, params.payload];
    },
    remove: (state, params) => {
      console.log("deleting name: " + params.payload);
      state.names = state.names.filter((name) => name !== params.payload);
    },
  },
});

export const { add, remove } = nameSlice.actions;
export default nameSlice.reducer;
