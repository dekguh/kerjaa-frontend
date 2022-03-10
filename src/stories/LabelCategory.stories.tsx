import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import LabelCategory from '../components/UI/atoms/controls/LabelCategory'

export default {
    title: 'Atoms/Controls/LabelCategory',
    component: LabelCategory
} as ComponentMeta<typeof LabelCategory>

const Template : ComponentStory<typeof LabelCategory> = (args) => (
    <LabelCategory {...args}/>
)

export const Default = Template.bind({})

Default.args = {
    label: 'Engineer'
}