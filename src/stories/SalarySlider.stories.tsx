import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SalarySlider from '../components/UI/atoms/controls/SalarySlider'

export default {
    title: 'Atoms/Controls/SalarySlider',
    component: SalarySlider
} as ComponentMeta<typeof SalarySlider>

const Template : ComponentStory<typeof SalarySlider> = (args) => (
    <SalarySlider {...args}/>
)

export const Default = Template.bind({})