import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from '../../atoms/controls/ButtonPrimary'

const Navigation = () => {
  return (
    <div className='flex flex-row flex-nowrap'>
        <div className='flex-grow flex-shrink'>
            <h2 className='text-h4 text-white-cream font-medium'>Kerjaa</h2>
        </div>

        <div className='flex-grow-0 flex-shrink'>
            <ButtonPrimary text='post a jobs'/>
        </div>
    </div>
  )
}

export default Navigation