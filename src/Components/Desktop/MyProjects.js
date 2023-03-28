import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/folder.png'

export const MyProjects = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Meus Projetos' icon={icon}/>
    </div>
  )
}
