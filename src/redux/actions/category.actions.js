import CategoryService from "../../service/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await new Promise((resolve) => {
        setTimeout(async () => {
            const result = await CategoryService.fetchCategories();
            resolve(result);
        }, 2000); // 5-second delay
    });
    return response;
});
