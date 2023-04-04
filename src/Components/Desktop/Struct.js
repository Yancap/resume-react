import React from 'react'
import styles from './Common.module.scss'
import './Desktop.scss'

export const Struct = ({icon, text, target}) => {
    function handleClick({currentTarget}){
        currentTarget.toggleAttribute('active')
    }
    function mouseOut({currentTarget}){
      currentTarget.removeAttribute('active')
  }
  return (
    <div className={styles.program} onMouseOut={mouseOut} onDoubleClick={handleClick} data-desktop={target}>
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
