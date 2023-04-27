import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        hideMenu:  (state) =>{
            state.isMenuOpen = false;
        }
    },
})

export const {toggleMenu, hideMenu} = AppSlice.actions;
export default AppSlice.reducer;


