import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggleUI',
    initialState: {cartIsVisible: false},
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    }
})

export const toggleActions = toggleSlice.actions;

export default toggleSlice;