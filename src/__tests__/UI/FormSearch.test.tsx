import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import React from 'react'
import HeadingSection from '../../components/UI/organisms/HeadingSection'
import StoreMock from '../../__mocks__/StoreMock'
import selectEvent from 'react-select-event'

describe('form search test', () => {
    test('should FormSearch rendered on HomeSection', () => {
        render(<StoreMock>
            <HeadingSection />
        </StoreMock>)

        expect(screen.getByPlaceholderText('ex: Frontend Engineer'))
    })

    test('jobs input "Web Designer" on form search', () => {
        render(<StoreMock>
            <HeadingSection />
        </StoreMock>)

        fireEvent.change(screen.getByPlaceholderText('ex: Frontend Engineer'), {
            target: {
                value: 'Web Designer'
            }
        })

        expect(screen.getByPlaceholderText('ex: Frontend Engineer')).toHaveValue('Web Designer')
    })

    test('location select "Bali" on form search', async () => {
        render(<StoreMock>
            <HeadingSection />
        </StoreMock>)

        expect(screen.getByTestId('formListLocation')).toHaveFormValues({
            location: 'All Indonesia'
        })

        // select value "Bali"
        await selectEvent.select(screen.getByDisplayValue('All Indonesia'), 'Bali')

        expect(screen.getByTestId('formListLocation')).toHaveFormValues({
            location: 'Bali'
        })
    })
})