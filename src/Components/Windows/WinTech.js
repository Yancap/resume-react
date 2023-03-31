import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/tech.png'

export const WinTech = () => {
  return (
    
      <Window icon={icon} path='Tecnologias' target='tech'>
        <div className={styles.win}>
          WinTech
        </div>
      </Window>
    
  )
}