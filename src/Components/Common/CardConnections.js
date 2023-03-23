import React from 'react'
import styles from './CardConnections.module.scss'

export const CardConnections = ({objects, className}) => {
  return (
    <div className={`${styles.cardConnection} ${className}`}>
        {objects.map((obj, index) => (
            <div key={index} >
                <div className={styles.container}>
                    <div className={styles.icon}>
                        {obj.icon}
                    </div>
                    <div className={styles.content}>
                        <div className={styles.span}>
                            <span>{obj.span}:</span>
                        </div>
                        <div className={styles.info}> 
                            <p>{obj.info}</p>
                        </div>
                    </div>
                </div>
                {index == objects.length - 1 ? null: <div className={styles.separator}></div>} 
            </div>
            )
        )}
    </div>
  )
}
