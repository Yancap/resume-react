import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/curriculo.png'

export const Curriculum = ({id, onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Curriculo' icon={icon} target={id}/>
    </div>
  )
}
