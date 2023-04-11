import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/contact.png'

export const Contact = ({id,onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Contatos' icon={icon} target={id}/>
    </div>
  )
}
