import { createSlice } from "@reduxjs/toolkit";
interface CategoryState {
    selectedCategory: string | null;
}
const initialState: CategoryState = {
    selectedCategory: null,
};
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    }
})
export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;