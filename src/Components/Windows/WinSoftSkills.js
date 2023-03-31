import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/avatar.png'

export const WinSoftSkills = () => {
  return (
    
      <Window icon={icon} path='Soft Skills' target='soft-skills'>
        <div className={styles.win}>
          Soft Skills
        </div>
      </Window>
    
  )
}