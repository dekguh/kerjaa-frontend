import React from 'react'
import reducer,
    {   updateJobs,
        updateLocation,
        updateCategory,
        updateSalaryMin,
        updateSalaryMax
    } from '../../components/utils/store/filter/reducer'

describe('reduce filters test', () => {
    // initial state testing
    test('should return initial state', () => {
        expect(reducer(undefined, { type: '', payload: '' })).toEqual(
            {
                jobs: '',
                salaryMin: 0,
                salaryMax: 100,
                location: '',
                category: []
            }
        )
    })

    // action updateJobs testing
    test('should jobs state return "frontend"', () => {
        const prevState = {
            jobs: '',
            salaryMin: 0,
            salaryMax: 100,
            location: '',
            category: []
        }
        expect(reducer(prevState, updateJobs('frontend'))).toEqual(
            {
                jobs: 'frontend',
                salaryMin: 0,
                salaryMax: 100,
                location: '',
                category: []
            }
        )
    })

    // action updateLocation testing
    test('should location state return "Bali, Indonesia"', () => {
        const prevState = {
            jobs: '',
            salaryMin: 0,
            salaryMax: 100,
            location: '',
            category: []
        }
        expect(reducer(prevState, updateLocation('Bali, Indonesia'))).toEqual(
            {
                jobs: '',
                salaryMin: 0,
                salaryMax: 100,
                location: 'Bali, Indonesia',
                category: []
            }
        )
    })

    // action updateCategory testing
    test('should category state return "["engineer", "design"]"', () => {
        const prevState = {
            jobs: '',
            salaryMin: 0,
            salaryMax: 100,
            location: '',
            category: []
        }
        expect(reducer(prevState, updateCategory(["engineer", "design"]))).toEqual(
            {
                jobs: '',
                salaryMin: 0,
                salaryMax: 100,
                location: '',
                category: ["engineer", "design"]
            }
        )
    })

    // action updateSalaryMin & updateSalaryMax testing
    test('should salaryMin state return "20"', () => {
        const prevState = {
            jobs: '',
            salaryMin: 0,
            salaryMax: 100,
            location: '',
            category: []
        }
        expect(reducer(prevState, updateSalaryMin(20))).toEqual(
            {
                jobs: '',
                salaryMin: 20,
                salaryMax: 100,
                location: '',
                category: []
            }
        )
    })
    test('should salaryMax state return "80"', () => {
        const prevState = {
            jobs: '',
            salaryMin: 0,
            salaryMax: 100,
            location: '',
            category: []
        }
        expect(reducer(prevState, updateSalaryMax(80))).toEqual(
            {
                jobs: '',
                salaryMin: 0,
                salaryMax: 80,
                location: '',
                category: []
            }
        )
    })
})