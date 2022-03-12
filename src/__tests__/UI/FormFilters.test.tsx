import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import FormFilters from '../../components/UI/molecules/FormFilters'
import StoreMock from '../../__mocks__/StoreMock'

describe('form filters testing', () => {
    test('should form filters rendered', () => {
        render(
            <StoreMock>
                <FormFilters />
            </StoreMock>
        )

        expect(screen.getByText('category'))
    })

    test('button add category clicked should showing list dropdown', () => {
        render(
            <StoreMock>
                <FormFilters />
            </StoreMock>
        )

        const btnCategory = screen.getByText('category')

        fireEvent.click(btnCategory)

        expect(screen.getByText('Engineer'))
    })

    test('should checkboxes "engineer" and "Accounting" checked and showing label', () => {
        render(
            <StoreMock>
                <FormFilters />
            </StoreMock>
        )

        const btnCategory = screen.getByText('category')

        // open dropdown
        fireEvent.click(btnCategory)

        // click checkbox "engineer" and "Accounting"
        fireEvent.click(screen.getByTestId('category-checkbox-1'))
        fireEvent.click(screen.getByTestId('category-checkbox-2'))

        // close dropdown
        fireEvent.click(btnCategory)

        // should it showing as label
        expect(screen.getByText('engineer'))
        expect(screen.getByText('Accounting'))
    })

    test('button salary clicked should showing slider dropdown', () => {
        render(
            <StoreMock>
                <FormFilters />
            </StoreMock>
        )

        const btnSalary = screen.getByText('salary')

        fireEvent.click(btnSalary)

        expect(screen.getByText('min: 0 mil'))
        expect(screen.getByText('max: 100 mil'))
    })
})