import React from 'react'
import { Window } from './Window'
import styles from './WinProject.module.scss'
import icon from '../../Assets/desktop/about.png'

export const WinAbout = () => {
  return (
    
      <Window target='about' icon={icon} path='Sobre Mim' styles={{display: 'block'}}>
        <div className={styles.win}>
          About
        </div>
      </Window>
    
  )
}
