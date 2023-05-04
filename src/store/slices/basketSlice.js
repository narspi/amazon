import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].count++;
      } else {
        const product = {
          ...action.payload,
          count: 1,
        };
        state.items = [...state.items, product];
      }
    },
    minuseFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      state.items[index].count--;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product id ${action.payload}`);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket, minuseFromBasket } =
  basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectItemsLength = (state) =>
  state.basket.items
    ? state.basket.items.reduce(
        (total, item) => total + item.count,
        0
      )
    : 0;
export const selectTotalPrice = (state) =>
  state.basket.items
    ? state.basket.items.reduce(
        (count, item) => count + item.count * item.price,
        0
      )
    : 0;

export default basketSlice.reducer;
