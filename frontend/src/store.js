import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './slices/tasksSlice'
import cardSlices from './slices/cardSlices'


export const store = configureStore({
    reducer: {
        cards: cardSlices,
        tasks: tasksReducer
    }
})