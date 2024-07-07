import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        habits: habitsReducer,
    }
})