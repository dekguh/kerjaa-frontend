import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ListLocation from '../components/UI/atoms/controls/ListLocation'

export default {
    title: 'Atoms/Controls/ListLocation',
    component: ListLocation
} as ComponentMeta<typeof ListLocation>

const Template : ComponentStory<typeof ListLocation> = (args) => (
    <ListLocation {...args}/>
)

export const Default = Template.bind({})