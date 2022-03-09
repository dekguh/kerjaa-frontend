import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitStateFilter } from '../../types'

const initialState : IInitStateFilter = {
    jobs: '',
    salaryMin: 0,
    salaryMax: 0,
    location: '',
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
        }
    }
})

export const { updateJobs, updateLocation } = filterSlice.actions

export default filterSlice.reducer