import { createSlice } from "@reduxjs/toolkit";
import House from "../Components/Images/main/passion/House.png";
import Food from "../Components/Images/main/passion/Food.png";
import Smile from "../Components/Images/main/passion/Smile.png";

const pasionSlice = createSlice({
  name: "pasion",
  initialState: {
    passion: [
      {
        img: House,
        backgroundColor: "#8fa6322f",
        name: "Quality Food",
        content:
          "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
      },
      {
        img: Food,
        backgroundColor: "#e64d2e2f",
        name: "Food Delivery",
        content:
          "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
      },
      {
        img: Smile,
        backgroundColor: "#dc780b2f",
        name: "Super Taste",
        content:
          "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
      },
    ],
  },
  reducers: {},
});

export const {} = pasionSlice.actions;
export default pasionSlice.reducer;
