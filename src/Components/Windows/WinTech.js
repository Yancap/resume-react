import React from 'react'
import { Window } from './Window'
import styles from './WinTech.module.scss'
import icon from '../../Assets/desktop/tech.png'

export const WinTech = () => {
  return (
    
      <Window icon={icon} path='Tecnologias' target='tech' title='Tecnologias que domino'>
        <div className={styles.window}>
          WinTech
        </div>
      </Window>
    
  )
}