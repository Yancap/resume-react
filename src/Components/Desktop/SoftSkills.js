import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/avatar.png'

export const SoftSkills = ({id,onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Soft skills' icon={icon} target={id}/>
    </div>
  )
}
