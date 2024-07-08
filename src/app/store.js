import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './habitsSlice'
import userHabitsReducer from './userHabitsSlice'

export const store = configureStore({
    reducer: {
        habits: habitsReducer,
        userHabits: userHabitsReducer,
    }
})