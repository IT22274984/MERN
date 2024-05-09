import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './slices/tasksSlice'
import cardSlices from './slices/cardSlices'
import userReducer from './slices/userSlice.js';

export const store = configureStore({
    reducer: {
        cards: cardSlices,
        tasks: tasksReducer,
        user:userReducer
    }
})