import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormFilters from '../components/UI/molecules/FormFilters'

export default {
    title: 'Molecules/FormFilters',
    component: FormFilters
} as ComponentMeta<typeof FormFilters>

const Template : ComponentStory<typeof FormFilters> = (args) => (
    <FormFilters />
)

export const Default = Template.bind({})