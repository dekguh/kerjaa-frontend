import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextHeading from '../components/UI/atoms/text/TextHeading'

export default {
    title: 'Atoms/Text/TextHeading',
    component: TextHeading
} as ComponentMeta<typeof TextHeading>

const Template : ComponentStory<typeof TextHeading> = (args) => (
    <TextHeading {...args}/>
)

export const Default = Template.bind({})

Default.args = {
    text: 'Title',
    classes: 'text-black-navy font-bold text-h1'
}