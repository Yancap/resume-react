import React from 'react'
import styles from './Button.module.scss'

export const Button = ({content, icon, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
        {icon && <div>{icon}</div>}
        {content && <div><span>{content}</span></div>}
    </button>
  )
}
