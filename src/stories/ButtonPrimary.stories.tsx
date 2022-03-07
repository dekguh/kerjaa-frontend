import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonPrimary from '../components/UI/atoms/controls/ButtonPrimary';
import { BiHomeAlt } from 'react-icons/bi'

export default {
    title: 'Atoms/Controls/ButtonPrimary',
    component: ButtonPrimary
} as ComponentMeta<typeof ButtonPrimary>

const Template : ComponentStory<typeof ButtonPrimary> = (args) => (
    <ButtonPrimary {...args}/>
)

export const Default = Template.bind({})

Default.args = {
    text: 'Button',
    Icon: BiHomeAlt
}