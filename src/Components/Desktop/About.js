import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/about.png'

export const About = ({id, onClick, ...props}) => {
  const clientW = window.screen.width
  return (
    clientW > 800 ? 
    <div id={id} onDoubleClick={onClick} {...props}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
    :
    <div id={id} onPointerEnter={onClick} {...props}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
  )
}
