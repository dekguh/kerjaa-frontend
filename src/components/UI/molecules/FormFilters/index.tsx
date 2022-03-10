import React, { ChangeEvent, useState } from 'react'
import ButtonPrimary from '../../atoms/controls/ButtonPrimary'
import { AiOutlinePlus } from 'react-icons/ai'
import LabelCategory from '../../atoms/controls/LabelCategory'
import SalarySlider from '../../atoms/controls/SalarySlider'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../utils/store/store'
import { updateCategory, updateSalaryMax, updateSalaryMin } from '../../../utils/store/filter/reducer'

const FormFilters = () => {
  const dispatch = useDispatch<AppDispatch>()
  const stateFilters = useSelector((state : RootState) => state.filters)

  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
  const [isSalaryOpen, setIsSalaryOpen] = useState<boolean>(false)

  const handleCheckedBox = (e : ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked) {
      dispatch(updateCategory([...stateFilters.category, e.target.value]))
    } else {
      const reFilter = stateFilters.category.filter((data : string) => {
        if(data.indexOf(e.target.value) > -1) return false
        return true
      })
      dispatch(updateCategory([...reFilter]))
    }
  }

  return (
    <div className='max-w-815px w-full border-b border-violet-bold pb-3 mx-auto mt-32'>
      <div className='flex flex-col md:flex-row flex-nowrap md:items-center'>
        <div className='flex-grow flex-shrink flex flex-row flex-wrap md:flex-nowrap md:items-center'>
          {/* list label category */}
          <div className='flex-grow flex-shrink pr-3 w-full pb-4 md:p-0'>
            <ul className='flex flex-row flex-wrap'>
              {stateFilters.category.length >= 1 && stateFilters.category.map((data : string, i : number) => (
                <li key={i} className='pr-2 pb-1 pt-1'>
                  <LabelCategory
                    label={data}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* filter category (bug checked hilang) */}
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
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='engineer'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('engineer') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Engineer</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='Accounting'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('Accounting') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Accounting</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='Analys'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('Analys') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Analys</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='Operational'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('Operational') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Operational</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='Design'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('Design') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Design</span>
                </li>

                <li className='flex flex-row flex-nowrap mb-1 items-center'>
                  <input
                    type='checkbox'
                    className='flex-grow-0 flex-shrink'
                    value='Editor'
                    onChange={handleCheckedBox}
                    checked={stateFilters.category.indexOf('Editor') > -1 ? true : false}
                  />
                  <span className='inline-block pl-2'>Editor</span>
                </li>
              </ul>
            </div>)}
          </div>

          {/* filter salary */}
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
                  dispatch(updateSalaryMin(value[0]))
                  dispatch(updateSalaryMax(value[1]))
                }}
              />

              <div className='flex flex-row flex-nowrap pt-2'>
                <span className='text-xs flex-grow flex-shrink'>min: {stateFilters.salaryMin} mil</span>
                <span className='text-xs flex-grow-0 flex-shrink'>max: {stateFilters.salaryMax} mil</span>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormFilters