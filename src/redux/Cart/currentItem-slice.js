import { createSlice } from "@reduxjs/toolkit";

const currentItemIdState = "Empty";
const currentItemId = createSlice({
  name: "currentItemId",
  initialState: currentItemIdState,
  reducers: {
    setCurrentItem: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const currentItemActions = currentItemId.actions;

export default currentItemId.reducer;
