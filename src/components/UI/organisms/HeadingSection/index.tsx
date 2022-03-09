import React from 'react'
import { IDividerBorder } from '../../../utils/types'
import DividerBorder from '../../atoms/other/DividerBorder'
import TextHeading from '../../atoms/text/TextHeading'
import FormSearch from '../../molecules/FormSearch'
import Navigation from '../../molecules/Navigation'

const HeadingSection : React.FC<IDividerBorder> = () => {
  return (
    <div className='bg-black-navy py-5 px-5'>
        <div className='max-w-1180px w-full mx-auto'>
            <Navigation />

            <div className='py-10'>
              <TextHeading
                component='h2'
                text='Find Remote Jobs Worldwides'
                classes='text-white-cream text-center text-h3 md:text-h2 font-bold max-w-485px mx-auto leading-tight'
              />

              <div className='py-6'>
                <DividerBorder
                  width='w-121px'
                  height='h-2 md:h-3'
                  rounded='rounded-xl'
                  color='bg-violet-bold'
                  classes='mx-auto'
                />
              </div>

              <div className='-mb-32 pt-8'>
                  <FormSearch />
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeadingSection