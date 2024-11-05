// src/slices/categoriesSlice.js
import { createSlice,  } from "@reduxjs/toolkit";
import { fetchCategories } from "../actions/category.actions";

// Async thunk for fetching categories

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    loading: false,
    error: null,
    addtocart : [],
  },
  reducers: {
    addingProductToCart: (state, action) => {
      const existingProduct = state.addtocart.find((product) => product.id === action.payload.id);
      if (!existingProduct) {
        state.addtocart.push(action.payload);
      }
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {addingProductToCart} = categoriesSlice.actions;
export default categoriesSlice.reducer;
