import React from 'react'
import styles from './Hours.module.scss'

export const Hours = () => {
  const [ hours, setHours ] = React.useState(null)
  const [ minutes, setMinutes ] = React.useState(null)
  

  React.useEffect(()=>{
    setInterval(()=>{
        const Data = new Date()
        setHours(Data.getHours())
        setMinutes(Data.getMinutes())
      }, 1000)
    
  },[setHours, setMinutes])

  return (
    <div className={styles.hours}>
        <span>
            {hours && minutes && (hours < 10 ? '0' + hours: hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)}
            
        </span>
    </div>
  )
}
