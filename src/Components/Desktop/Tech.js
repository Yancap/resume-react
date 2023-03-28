import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/tech.png'

export const Tech = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Tecnologias' icon={icon}/>
    </div>
  )
}
