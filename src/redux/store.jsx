import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice.jsx";
import searchReducer from "./slices/searchSlice.js";
import categoriesReducer from "./slices/category.slice.js";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    search: searchReducer,
    categories: categoriesReducer,
  },
});

export default store;
