import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/tech.png'

export const Tech = ({id,onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Tecnologias' icon={icon} target={id}/>
    </div>
  )
}
