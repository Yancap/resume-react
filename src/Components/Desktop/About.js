import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/about.png'

export const About = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Sobre mim' icon={icon}/>
    </div>
  )
}
