import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/avatar.png'

export const SoftSkills = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Soft skills' icon={icon}/>
    </div>
  )
}
