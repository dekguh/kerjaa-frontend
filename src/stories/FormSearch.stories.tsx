import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormSearch from '../components/UI/molecules/FormSearch'

export default {
    title: 'Molecules/FormSearch',
    component: FormSearch
} as ComponentMeta<typeof FormSearch>

const Template : ComponentStory<typeof FormSearch> = (args) => (
    <FormSearch />
)

export const Default = Template.bind({})