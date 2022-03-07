import React from 'react'
import { ITextHeading } from '../../../utils/types'

const TextHeading : React.FC<ITextHeading> = ({ component : Component = 'h1', text, classes }) => {
  return (
    <Component className={classes}>{text}</Component>
  )
}

export default TextHeading