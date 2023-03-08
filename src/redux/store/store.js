import { configureStore } from "@reduxjs/toolkit";
import cartItems from "../Cart/cartItemsSlice";
import currentItemId from "../Cart/currentItem-slice";
import menuSlice from "../Menu/menu-slice";

const store = configureStore({
  reducer: {
    cartItems: cartItems,
    currentItemId: currentItemId,
    menuSlice: menuSlice,
  },
});

export default store;
