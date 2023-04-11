import React from 'react'
import styles from './Tab.module.scss'

export const Tab = ({text, icon, target}) => {
  return (
    <div className={styles.tab} data-point={target} onMouseOver={()=> console.log(1)}>
        
        <div className={styles.icon}>
            <img src={icon} alt="" srcset="" />
        </div>
        <div>
            <span>
                {text}
            </span>
        </div>
    </div>
  )
}
