import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/folder.png'

export const MyProjects = ({id, onClick, ...props}) => {
  return (
    <div id={id} onClick={onClick} {...props}>
      <Struct text='Meus Projetos' icon={icon}/>
    </div>
  )
}
