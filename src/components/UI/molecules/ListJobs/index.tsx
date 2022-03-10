import React from 'react'
import CardJob from '../../atoms/cards/CardJob'

const dataListJobs = [
    {
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
    },
    {
        company: 'greeware',
        srcLogo: '/logo/greeware.svg',
        title: 'Backend Developer',
        location: 'Bali, Indonesia',
        salary: 'Rp.6m - Rp.10m',
        skill: [
            'Node.js',
            'express',
            'mongoDB',
            'MVC',
            'testing'
        ]
    },
    {
        company: 'greeware',
        srcLogo: '/logo/greeware.svg',
        title: 'UI/UX Designer',
        location: 'Bali, Indonesia',
        salary: 'Rp.6m - Rp.10m',
        skill: [
            'Figma',
            'UI concept',
            'UX concept',
            'research',
            'testing'
        ]
    },
    {
        company: 'greeware',
        srcLogo: '/logo/greeware.svg',
        title: 'Project Manager',
        location: 'Bali, Indonesia',
        salary: 'Rp.6m - Rp.10m',
        skill: [
            'Agile',
            'Scrum',
            'communication',
            'lead',
            'problem solved'
        ]
    },
    {
        company: 'greeware',
        srcLogo: '/logo/greeware.svg',
        title: 'Graphic Designer',
        location: 'Bali, Indonesia',
        salary: 'Rp.6m - Rp.10m',
        skill: [
            'photoshop',
            'illustrator',
            'drawing',
            'flat design',
            'creative'
        ]
    }
]

const ListJobs = () => {
  return (
    <div>
        <ul>
            <li>
                <CardJob
                    company='greeware'
                    srcLogo='/logo/greeware.svg'
                    title='Frontend Developer'
                    location='Bali, Indonesia'
                    salary='Rp.6m - Rp.10m'
                    skill={[
                        'react',
                        'tailwind',
                        'jest',
                        'RTL',
                        'storybook'
                    ]}
                />
            </li>
        </ul>
    </div>
  )
}

export default ListJobs