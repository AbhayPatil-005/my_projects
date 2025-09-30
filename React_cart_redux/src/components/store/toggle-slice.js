import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggleUI',
    initialState: {cartIsVisible: false},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const toggleActions = toggleSlice.actions;

export default toggleSlice;