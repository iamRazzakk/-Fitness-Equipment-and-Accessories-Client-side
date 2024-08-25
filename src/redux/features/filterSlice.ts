import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedCategories: [],
    priceRange: [0, 1000],
    sortBy: null,
};
export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleCategory: (state, action) => {
            const category = action.payload
            if (state.selectedCategories.includes(category)) {
                state.selectedCategories = state.selectedCategories.filter(
                    (catg) => catg !== category)
            } else {
                state.selectedCategories.push(category);
            }
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        clearFilters: (state) => {
            state.selectedCategories = [];
            state.priceRange = [0, 1000];
            state.sortBy = null;
        },
    }
})
export const {
    toggleCategory,
    setPriceRange,
    setSortBy,
    clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;