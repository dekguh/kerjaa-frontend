import React from 'react'
import CardJob from '../../atoms/cards/CardJob'

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