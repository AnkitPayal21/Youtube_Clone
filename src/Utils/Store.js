import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import ChatSlice from "./ChatSlice";
import SearchSlice from "./SearchSlice";
import  showSuggestion  from "./showSuggestions";

const store = configureStore({
    reducer:{
        app: AppSlice,
        search:SearchSlice,
        suggestions:showSuggestion,
        chat:ChatSlice,
    }
})

export default store;