import React from 'react'
import styles from './Button.module.scss'

export const Button = ({text, icon, onClick, ...props}) => {
  return (
    <button className={styles.button} onClick={onClick} onContextMenu={props.mouseRight} {...props}>
        {icon && <div className={styles.icon}><img src={icon} alt="" srcSet="" /></div>}
        {props.children && props.children}
        {text && <div><span>{text}</span></div>}
    </button>
  )
}
