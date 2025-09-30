import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import cartSlice from "./cart-slice";


const store = configureStore({
    reducer:{ toggleUI : toggleSlice.reducer, cart: cartSlice.reducer},
})

export default store;