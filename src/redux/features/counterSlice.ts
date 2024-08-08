import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {count: number} = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action:PayloadAction<number>) => {
            state.count += action.payload;
        },
        decrement: (state, action:PayloadAction<number>) => {
            state.count -= action.payload;
        }
    }
})

export const {decrement, increment} = counterSlice.actions;
export default counterSlice.reducer;