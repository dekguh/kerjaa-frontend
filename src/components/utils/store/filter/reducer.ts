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
        }
    }
})

export const { updateJobs } = filterSlice.actions

export default filterSlice.reducer