import React from 'react'
import { IDividerBorder } from '../../../utils/types'

const DividerBorder : React.FC<IDividerBorder> = ({ width = 'w-20', height = 'h-1', color = 'bg-violet-bold', rounded = 'rounded-sm', classes }) => {
  return (
    <div className={`${width} ${height} ${color} ${rounded} ${classes}`}></div>
  )
}

export default DividerBorder