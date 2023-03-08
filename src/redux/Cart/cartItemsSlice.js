import { createSlice } from "@reduxjs/toolkit";
const currentState = [];
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: currentState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    clearCart(state, action) {
      return (state = action.payload);
    },
    removeItem(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      return (state = newState);
    },
    incItemCount(state, action) {
      const newState = state.map((item) => {
        if (item.id == action.payload.id)
          return { ...item, count: action.payload.count + item.count };
        else return { ...item };
      });
      return (state = newState);
    },
    decItemCount(state, action) {
      const newState = state.map((item) => {
        if (item.id == action.payload.id)
          return { ...item, count: item.count - action.payload.count };
        else return { ...item };
      });
      return (state = newState);
    },
  },
});

export const itemCartActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
