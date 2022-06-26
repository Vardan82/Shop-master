import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    count: 0,
    num: 0,
    order: [],
  },
  reducers: {
    addOrder: (state, action) => {
      const newData = state.order;
      const payload = { ...action.payload };
      let order = newData.find((i) => i.id === payload.id);

      if (order) {
        order.count += 1;
      } else {
        state.count++;
        order = payload;
        order.count = 1;
        state.order.push(payload);
      }
    },
    deleteOrder: (state, action) => {
      state.count--;
      state.order.splice(action.payload, 1);
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
