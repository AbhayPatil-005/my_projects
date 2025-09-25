import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.counter += 1; },
    decrement: (state) => { state.counter -= 1; },
    incrementBy5: (state) => { state.counter += 5; },
    decrementBy5: (state) => { state.counter -= 5; },
  },
});

export const { increment, decrement, incrementBy5, decrementBy5 } = counterSlice.actions;
export default counterSlice.reducer;