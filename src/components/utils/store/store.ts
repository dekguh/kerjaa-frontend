import { configureStore } from '@reduxjs/toolkit'
import { default as filtersReducer } from './filter/reducer'

const store = configureStore({
    reducer: {
        filters: filtersReducer
    }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store