import React from 'react'
import { ICardJob } from '../../../utils/types'
import ButtonPrimary from '../controls/ButtonPrimary'

const CardJob : React.FC<ICardJob> = ({ srcLogo, company, title, location, salary, skill, date }) => {
  return (
    <div className='max-w-815px w-full bg-white shadow-light rounded-2xl p-4'>
        <div className='flex flex-row flex-wrap md:flex-nowrap md:items-center'>
            {/* logo */}
            <div className='w-66px flex-grow-0 flex-shrink pr-4 self-start'>
                <img
                    src={srcLogo}
                    className='w-full'
                />
            </div>

            {/* title, salary, location */}
            <div className='flex-grow-0 md:flex-grow flex-shrink pr-4'>
                <span className='text-sm text-black-body'>{company}</span>
                <h3 className='text-base text-black-navy font-bold'>{title}</h3>
                <div className='mt-1'>
                    <span className='bg-violet-light text-violet-bold text-xs py-1 px-1 rounded-sm leading-none mr-2'>
                        {location}
                    </span>

                    <span className='bg-green-light text-green-bold text-xs py-1 px-1 rounded-sm leading-none'>
                        {salary}
                    </span>
                </div>
            </div>

            {/* skill */}
            <div className='my-3 md:my-0 w-full md:w-auto flex-grow flex-shrink pr-4 max-w-xs'>
                <ul className='flex flex-row flex-wrap'>
                    {skill.length >= 1 && skill.map((data : any, i : number) => (
                        <li key={i} className='border border-black-navy p-1 px-2 rounded-full text-black-navy text-xs mr-2 my-1'>
                            {data}
                        </li>
                    ))}
                </ul>
            </div>

            {/* button detail */}
            <div className='flex-grow-0 flex-shrink'>
                <ButtonPrimary
                    text='detail'
                />
            </div>
        </div>
    </div>
  )
}

export default CardJob