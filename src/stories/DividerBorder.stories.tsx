import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DividerBorder from '../components/UI/atoms/other/DividerBorder'

export default {
    title: 'Atoms/Other/DividerBorder',
    component: DividerBorder
} as ComponentMeta<typeof DividerBorder>

const Template : ComponentStory<typeof DividerBorder> = (args) => (
    <DividerBorder />
)

export const Default = Template.bind({})