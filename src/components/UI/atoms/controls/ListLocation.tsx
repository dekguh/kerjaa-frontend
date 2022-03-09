import React from 'react'
import Select from 'react-select'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IListLocation } from '../../../utils/types'

const options = [
    { value: 'All Indonesia', label: 'All Indonesia' },
    { value: 'Bali', label: 'Bali' },
    { value: 'Jakarta', label: 'Jakarta' }
]

const ListLocation : React.FC<IListLocation> = ({ onChangeList }) => {
  return (
    <div className='flex flex-row flex-nowrap items-center w-full max-w-150px border-b border-violet-bold'>
        <div className='flex-grow-0 flex-shrink'>
            <i className='text-violet-bold'><FaMapMarkerAlt /></i>
        </div>

        <div className='flex-grow flex-shrink'>
            <Select
                className="select__location"
                classNamePrefix="select"
                defaultValue={options[0]}
                isSearchable={true}
                options={options}
                onChange={onChangeList}
            />
        </div>
    </div>
  )
}

export default ListLocation