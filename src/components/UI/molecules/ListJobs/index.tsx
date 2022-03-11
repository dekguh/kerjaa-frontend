import React, { useState } from 'react'
import CardJob from '../../atoms/cards/CardJob'
import ButtonPrimary from '../../atoms/controls/ButtonPrimary'

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

const ListJobs : React.FC = () => {
    const [totalShow, setTotalShow] = useState<number>(2)

    return (
        <div className='px-5'>
            <ul>
                {(dataListJobs.length >= 1 && totalShow) && dataListJobs.slice(0, totalShow).map((data : any, i : number) => (
                    <li key={i} className='mb-3'>
                        <CardJob
                            company={data.company}
                            srcLogo={data.srcLogo}
                            title={data.title}
                            location={data.location}
                            salary={data.salary}
                            skill={data.skill}
                        />
                    </li>
                ))}
            </ul>

            <div className='pt-3'>
                <ButtonPrimary
                    text='see more'
                    classes='mx-auto'
                    onClick={() => {
                        setTotalShow(totalShow + 2)
                    }}
                />
            </div>
        </div>
    )
}

export default ListJobs