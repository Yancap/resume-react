import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/folder.png'

export const WinProject = () => {
  return (
    
      <Window icon={icon} path='Meus Projetos' target='my-projects'>
        <div className={styles.win}>
          Project
        </div>
      </Window>
    
  )
}
