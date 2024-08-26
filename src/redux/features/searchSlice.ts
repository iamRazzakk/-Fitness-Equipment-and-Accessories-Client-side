import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    searchTerm: string;
}

const initialState: SearchState = {
    searchTerm: "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchState: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchState: (state) => {
            state.searchTerm = "";
        },
    },
});

export const { setSearchState, clearSearchState } = searchSlice.actions;
export default searchSlice.reducer;
