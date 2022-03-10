import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitStateFilter } from '../../types'

const initialState : IInitStateFilter = {
    jobs: '',
    salaryMin: 0,
    salaryMax: 100,
    location: '',
    category: []
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateJobs : (state, action : PayloadAction<string>) => {
            state.jobs = action.payload
        },
        updateLocation: (state, action : PayloadAction<string>) => {
            state.location = action.payload
        },
        updateCategory: (state, action : PayloadAction<string[]>) => {
            state.category = action.payload
        },
        updateSalaryMin: (state, action : PayloadAction<number>) => {
            state.salaryMin = action.payload
        },
        updateSalaryMax: (state, action : PayloadAction<number>) => {
            state.salaryMax = action.payload
        },
        updateClearAllFilter: (state) => {
            state.jobs = ''
            state.location = ''
            state.category = []
            state.salaryMin = 0
            state.salaryMax = 100
        }
    }
})

export const { updateJobs, updateLocation, updateCategory, updateSalaryMin, updateSalaryMax } = filterSlice.actions

export default filterSlice.reducer