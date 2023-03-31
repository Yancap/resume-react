import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/curriculo.png'

export const WinCurriculum = () => {
  return (
    
      <Window icon={icon} path='Curriculo' target='curriculum'>
        <div className={styles.win}>
          Curriculo
        </div>
      </Window>
    
  )
}