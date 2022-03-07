import React from 'react'
import { IButton } from '../../../utils/types'

const ButtonPrimary : React.FC<IButton> = ({ onClick, text, classes, Icon }) => {
  return (
    <button onClick={onClick} className={`bg-black-doff px-7 py-9px text-white-cream rounded flex flex-row flex-nowrap items-center ${classes}`}>
        {Icon && (<span className='pr-2 flex-grow-0 flex-shrink-0'>
            <i><Icon /></i>
        </span>)}
        <span className='font-normal text-base flex-grow-0 flex-shrink-0'>{text}</span>
    </button>
  )
}

export default ButtonPrimary