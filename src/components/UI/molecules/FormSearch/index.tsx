import React from 'react'
import ListLocation from '../../atoms/controls/ListLocation'
import { AiOutlineSearch } from 'react-icons/ai'
import { IFormSearch } from '../../../utils/types'

const FormSearch : React.FC<IFormSearch> = ({ onChangeJob }) => {
  return (
    <div className='max-w-815px w-full p-9 rounded-2xl shadow-light bg-white mx-auto'>
        <div>
          <ListLocation />
        </div>

        <div className='mt-4'>
          <div className='flex flex-row flex-nowrap items-center py-4 px-6 border border-gray-200 rounded-full'>
            <div className='flex-grow-0 flex-shrink'>
              <i className='text-violet-bold text-xl'><AiOutlineSearch /></i>
            </div>

            <input
              type="text"
              className='flex-grow flex-shrink border-0 outline-0 shadow-none pl-3 text-black-body' placeholder='ex: Frontend Egineer'
              onChange={onChangeJob}
            />
          </div>
        </div>
    </div>
  )
}

export default FormSearch