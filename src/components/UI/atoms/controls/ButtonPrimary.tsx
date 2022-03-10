import React from 'react'
import { IButton } from '../../../utils/types'

const ButtonPrimary : React.FC<IButton> = ({ onClick, text, classes, Icon, iconPosition = 'left' }) => {
  return (
    <button onClick={onClick} className={`bg-black-doff px-7 py-9px text-white-cream rounded flex flex-row flex-nowrap items-center ${classes}`}>
        {(Icon && iconPosition == 'left') && (<span className='pr-2 flex-grow-0 flex-shrink-0'>
            <i><Icon /></i>
        </span>)}
        <span className='font-normal text-base flex-grow-0 flex-shrink-0'>{text}</span>
        {(Icon && iconPosition == 'right') && (<span className='pl-2 flex-grow-0 flex-shrink-0'>
            <i><Icon /></i>
        </span>)}
    </button>
  )
}

export default ButtonPrimary