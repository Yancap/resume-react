import React from 'react'
import styles from './Hours.module.scss'

export const Hours = () => {
  const [ hours, setHours ] = React.useState(null)
  const [ minutes, setMinutes ] = React.useState(null)
  let seconds = null

  React.useEffect(()=>{
    setInterval(()=>{
        const Data = new Date()
        setHours(Data.getHours())
        setMinutes(Data.getMinutes())
      }, 1000)
    
  },[setHours, setMinutes])

//   if (seconds && hours && minutes) {
//     setInterval(()=>{
//         console.log(seconds);
//         if (seconds < 60) {
//             seconds++
//         }
//         else if ( seconds === 60 && minutes < 60) {
//             console.log(seconds);
//             seconds = 0
//             setMinutes(minutes + 1)
//         } else if (minutes === 60 && hours < 24) {
//             setMinutes(0)
//             seconds = 0
//             setHours(hours + 1)
//         } else{
//             setMinutes(0)
//             seconds = 0
//             setHours(hours)
//         }
//     }, 1000)
//   }
  return (
    <div className={styles.hours}>
        <span>
            {hours && minutes && (hours < 10 ? '0' + hours: hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)}
            
        </span>
    </div>
  )
}
