import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonPrimary from '../components/UI/atoms/controls/ButtonPrimary';
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

export default {
    title: 'Atoms/Controls/ButtonPrimary',
    component: ButtonPrimary
} as ComponentMeta<typeof ButtonPrimary>

const Template : ComponentStory<typeof ButtonPrimary> = (args) => (
    <ButtonPrimary {...args}/>
)

export const ButtonIconLeft = Template.bind({})
export const ButtonIconRight = Template.bind({})

export const ButtonAddCategory = Template.bind({})

ButtonIconLeft.args = {
    text: 'Button',
    Icon: BiHomeAlt,
    iconPosition: 'left'
}

ButtonIconRight.args = {
    text: 'Button',
    Icon: BiHomeAlt,
    iconPosition: 'right'
}

ButtonAddCategory.args = {
    text: 'Button',
    Icon: AiOutlinePlus,
    iconPosition: 'right',
    classes: 'py-4 px-3'
}