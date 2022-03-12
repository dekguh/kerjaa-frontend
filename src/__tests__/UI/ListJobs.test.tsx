import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import StoreMock from '../../__mocks__/StoreMock'
import ListJobs from '../../components/UI/molecules/ListJobs'

describe('list jobs testing', () => {
    test('should test is showing list jobs', () => {
        render(
            <StoreMock>
                <ListJobs />
            </StoreMock>
        )

        expect(screen.getByText('Frontend Developer'))
    })

    test('should button "see more" clicked, showing more jobs', () => {
        render(
            <StoreMock>
                <ListJobs />
            </StoreMock>
        )

        fireEvent.click(screen.getByText('see more'))

        expect(screen.getByText('UI/UX Designer'))
    })
})