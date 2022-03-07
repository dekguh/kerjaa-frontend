import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonPrimary from '../components/UI/atoms/controls/ButtonPrimary';

export default {
    title: 'Atoms/Controls/ButtonPrimary',
    component: ButtonPrimary
} as Meta

const Template : Story = () => (
    <ButtonPrimary />
)

export const Default = Template.bind({})