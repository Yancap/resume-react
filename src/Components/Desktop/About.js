import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/about.png'

export const About = ({id, onClick, ...props}) => {
  return (
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
  )
}
