import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './habitsSlice'
import userHabitsReducer from './userHabitsSlice'
import userReducer from './userSlice'
import streaksReducer from './streaksSlice'

export const store = configureStore({
    reducer: {
        habits: habitsReducer,
        userHabits: userHabitsReducer,
        user: userReducer,
        streaks: streaksReducer,
    }
})