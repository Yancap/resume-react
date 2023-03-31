import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/contact.png'

export const WinContacts = () => {
  return (
    
      <Window icon={icon} path='Contatos' target='contact'>
        <div >
          Contact
        </div>
      </Window>
    
  )
}