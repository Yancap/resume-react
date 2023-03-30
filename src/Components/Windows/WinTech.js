import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'

export const WinTech = () => {
  return (
    
      <Window target='tech'>
        <div className={styles.win}>
          Window
        </div>
      </Window>
    
  )
}