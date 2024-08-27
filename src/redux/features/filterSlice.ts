import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface FilterState {
    selectedCategories: string[];
    priceRange: [number, number];
    sortBy: string | null;
}

// Define the initial state with the FilterState type
const initialState: FilterState = {
    selectedCategories: [],
    priceRange: [0, 1000],
    sortBy: null,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<string>) => {
            const category = action.payload;
            if (state.selectedCategories.includes(category)) {
                state.selectedCategories = state.selectedCategories.filter(
                    (catg) => catg !== category
                );
            } else {
                state.selectedCategories.push(category);
            }
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.priceRange = action.payload;
        },
        setSortBy: (state, action: PayloadAction<string | null>) => {
            state.sortBy = action.payload;
        },
        clearFilters: (state) => {
            state.selectedCategories = [];
            state.priceRange = [0, 1000];
            state.sortBy = null;
        },
    },
});

export const {
    toggleCategory,
    setPriceRange,
    setSortBy,
    clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
