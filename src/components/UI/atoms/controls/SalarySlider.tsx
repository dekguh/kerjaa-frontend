import React from 'react'
import ReactSlider from 'react-slider'
import { ISalarySlider } from '../../../utils/types'

const SalarySlider : React.FC<ISalarySlider> = ({ onChange }) => {
  return (
    <ReactSlider
        className='h-5 w-full max-w-xs'
        trackClassName='salary-track-slider'
        thumbActiveClassName='border-none'
        defaultValue={[0, 100]}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => (
        <div {...props} className='bg-violet-bold p-1 text-xs rounded-full relative h-7 w-7 -top-2'>
            <span className='absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 text-white'>{state.valueNow}</span>
        </div>)}
        pearling
        minDistance={10}
        onChange={onChange}
    />
  )
}

export default SalarySlider