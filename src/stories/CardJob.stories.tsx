import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardJob from '../components/UI/atoms/cards/CardJob'

export default {
    title: 'Atoms/Cards/CardJob',
    component: CardJob
} as ComponentMeta<typeof CardJob>

const Template : ComponentStory<typeof CardJob> = (args) => (
    <CardJob {...args}/>
)

export const Default = Template.bind({})

Default.args = {
    company: 'greeware',
    srcLogo: '/logo/greeware.svg',
    title: 'Frontend Developer',
    location: 'Bali, Indonesia',
    salary: 'Rp.6m - Rp.10m',
    skill: [
        'react',
        'tailwind',
        'jest',
        'RTL',
        'storybook'
    ]
}