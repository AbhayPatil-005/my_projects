import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";


const store = configureStore({
    reducer:{ toggleUI : toggleSlice.reducer},
})

export default store;