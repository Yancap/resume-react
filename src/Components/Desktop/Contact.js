import React from 'react'
import styles from './Common.module.scss'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/contact.png'

export const Contact = ({id}) => {
  return (
    <div id={id}>
      <Struct text='Contatos' icon={icon}/>
    </div>
  )
}
