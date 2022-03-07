import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HeadingSection from '../components/UI/organisms/HeadingSection'

export default {
    title: 'Organisms/HeadingSection',
    component: HeadingSection
} as ComponentMeta<typeof HeadingSection>

const Template : ComponentStory<typeof HeadingSection> = () => (
    <HeadingSection />
)

export const Default = Template.bind({})