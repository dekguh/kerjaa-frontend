import React from 'react'
import { TiTimes } from 'react-icons/ti'
import { ILabelCategory } from '../../../utils/types'

const LabelCategory : React.FC<ILabelCategory> = ({ onClick, label }) => {
  return (
    <div className='inline-block bg-violet-bold text-white rounded-full'>
        <div className='flex flex-row flex-nowrap items-center py-4 px-3'>
            <div className='flex-grow-0 flex-shrink leading-none pr-1'>
                {label}
            </div>
        </div>
    </div>
  )
}

export default LabelCategory