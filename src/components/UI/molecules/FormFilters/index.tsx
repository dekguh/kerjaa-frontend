import React, { useState } from 'react'
import ButtonPrimary from '../../atoms/controls/ButtonPrimary'
import { AiOutlinePlus } from 'react-icons/ai'
import { TiTimes } from 'react-icons/ti'
import LabelCategory from '../../atoms/controls/LabelCategory'
import SalarySlider from '../../atoms/controls/SalarySlider'

const FormFilters = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
  const [isSalaryOpen, setIsSalaryOpen] = useState<boolean>(false)

  return (
    <div className='max-w-815px w-full border-b border-violet-bold pb-3 mx-auto mt-32'>
      <div className='flex flex-col md:flex-row flex-nowrap md:items-center'>
        <div className='flex-grow flex-shrink flex flex-row flex-wrap md:flex-nowrap md:items-center'>
          <div className='flex-grow flex-shrink pr-3 w-full pb-4 md:p-0'>
            <LabelCategory label='engineer'/>
          </div>

          <div className='flex-grow-0 flex-shrink relative pr-3'>
            <ButtonPrimary
              text='category'
              Icon={AiOutlinePlus}
              iconPosition='right'
              classes='py-4 px-3 border-black-doff border bg-transparent text-black-doff'
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen)
                setIsSalaryOpen(false)
              }}
            />

            {isCategoryOpen && (<div className='bg-white absolute shadow-light p-3 w-52 rounded-md z-20 mt-2'>
              <ul className='max-h-32 overflow-y-auto'>
                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Engineer</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Accounting</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Analys</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Operational</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Design</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input type='checkbox' className='flex-grow-0 flex-shrink'/>
                  <span className='inline-block pl-2'>Editor</span>
                </li>
              </ul>
            </div>)}
          </div>

          <div className='flex-grow-0 flex-shrink pr-3 relative'>
            <ButtonPrimary
              text='salary'
              Icon={AiOutlinePlus}
              iconPosition='right'
              classes='py-4 px-3 border-black-doff border bg-transparent text-black-doff'
              onClick={() => {
                setIsSalaryOpen(!isSalaryOpen)
                setIsCategoryOpen(false)
              }}
            />

            {isSalaryOpen && (<div className='bg-white absolute shadow-light pt-5 pb-3 px-3 w-52 rounded-md z-20 mt-2'>
              <SalarySlider
                onChange={(value : number[], index : number) => {
                  console.log(value)
                }}
              />

              <div className='flex flex-row flex-nowrap pt-2'>
                <span className='text-xs flex-grow flex-shrink'>min: 1 mil</span>
                <span className='text-xs flex-grow-0 flex-shrink'>max: 100 mil</span>
              </div>
            </div>)}
          </div>
        </div>

        <div className='flex-grow md:flex-grow-0 flex-shrink pt-4 md:pt-0'>
          <ButtonPrimary
            text='clear'
            Icon={TiTimes}
            iconPosition='right'
            classes='py-4 px-3'
          />
        </div>
      </div>
    </div>
  )
}

export default FormFilters