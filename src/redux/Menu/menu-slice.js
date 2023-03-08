import { createSlice } from "@reduxjs/toolkit";

const prevState = [];
const menuSlice = createSlice({
  name: "menu",
  initialState: prevState,
  reducers: {
    setMenu(state, action) {
      return (state = action.payload);
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
