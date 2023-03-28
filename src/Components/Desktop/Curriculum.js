import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/curriculo.png'

export const Curriculum = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Curriculo' icon={icon}/>
    </div>
  )
}
