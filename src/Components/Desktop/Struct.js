import React from 'react'
import styles from './Common.module.scss'
import './Desktop.scss'

export const Struct = ({icon, text}) => {
    function handleClick({currentTarget}){
        currentTarget.toggleAttribute('active')
    }
  return (
    <div className={styles.program} onClick={handleClick}>
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <div className={styles.text}>
        <span>{text}</span>
      </div>
      <div className={styles.overlay}></div>
  </div>
  )
}
