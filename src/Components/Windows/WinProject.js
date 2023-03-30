import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'

export const WinProject = () => {
  return (
    
      <Window target='my-projects'>
        <div className={styles.win}>
          Window
        </div>
      </Window>
    
  )
}
