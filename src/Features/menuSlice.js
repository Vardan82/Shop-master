import { createSlice } from "@reduxjs/toolkit";
import Food1 from "../Components/Images/main/menu/1.png";
import Food2 from "../Components/Images/main/menu/2.png";
import Food3 from "../Components/Images/main/menu/3.png";
import Food4 from "../Components/Images/main/menu/4.png";
import Food5 from "../Components/Images/main/menu/5.png";
import Food6 from "../Components/Images/main/menu/6.png";
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [
      {
        id: 1,
        name: "Vegie Muffen",
        price: "16$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food1,
      },
      {
        id: 2,
        name: "Salads",
        price: "12$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food2,
      },
      {
        id: 3,
        name: "Burger",
        price: "10$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food3,
      },
      {
        id: 4,
        name: "Delmonico Steak dish",
        price: "14$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food4,
      },
      {
        id: 5,
        name: "Egg Masala",
        price: "9$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food5,
      },
      {
        id: 6,
        name: "Peach Melba dish",
        price: "15$",
        text: "There are many things are needed to start the Fast Food Business.",
        img: Food6,
      },
    ],
  },
  reducers: {
    more: (state) => {
      state.menu.push(
        {
          name: "Vegie Muffen",
          price: "16$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food1,
        },
        {
          name: "Salads",
          price: "12$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food2,
        },
        {
          name: "Burger",
          price: "10$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food3,
        },
        {
          name: "Delmonico Steak dish",
          price: "14$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food4,
        },
        {
          name: "Egg Masala",
          price: "9$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food5,
        },
        {
          name: "Peach Melba dish",
          price: "15$",
          text: "There are many things are needed to start the Fast Food Business.",
          img: Food6,
        }
      );
    },
    deleteStateValue: (state) => {
      state.menu.splice(0, 6);
    },
  },
});

export const { more, deleteStateValue } = menuSlice.actions;
export default menuSlice.reducer;
