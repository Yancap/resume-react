import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/folder.png'

export const MyProjects = ({id, onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Meus Projetos' icon={icon} target={id}/>
    </div>
  )
}
