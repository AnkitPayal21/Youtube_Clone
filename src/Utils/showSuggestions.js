import { createSlice } from "@reduxjs/toolkit";
const showSuggestions = createSlice({
    name: "suggest",
    initialState: {
        suggest: false,
    },
    reducers: {
        hideSuggestion: (state) => {
            state.suggest = false;
        },
        showSuggestion: (state) => {
            state.suggest = true;
        },
    },
});

export const { hideSuggestion, showSuggestion } = showSuggestions.actions;
export default showSuggestions.reducer;
