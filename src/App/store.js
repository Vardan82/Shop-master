import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../Features/menuSlice";
import orderSlice from "../Features/orderSlice";
import pasionSlice from "../Features/pasionSlice";
export const store = configureStore({
  reducer: {
    menu: menuSlice,
    order: orderSlice,
    passion: pasionSlice,
  },
});
