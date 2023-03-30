import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'

export const WinAbout = () => {
  return (
    
      <Window target='about'>
        <div className={styles.win}>
          About
        </div>
      </Window>
    
  )
}
