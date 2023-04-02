import React from 'react'
import styles from './Program.module.scss'

export const Program = ({icon, text, path, github, setLink}) => {
    function handleClick({currentTarget}){
      currentTarget.toggleAttribute('active')
      if (setLink) {
        if (!path && !github) 
            setLink('Indisponível no Momento')
        else if (!path)
            setLink(github)
        else if (!github) 
            setLink(path)
        else 
            setLink({path, github})
      }
    }
    function mouseOut({currentTarget}){
        currentTarget.removeAttribute('active')
    }
  return (
    <div className={styles.project} onMouseOut={mouseOut} onDoubleClick={handleClick} data-path={path}>
      <div className={styles.icon}>
        <img src={icon} />
      </div>
      <div className={styles.text}>
        <div className={styles.overlay}></div>
        <span>{text}</span>
      </div>
      <div className={styles.overlay}></div>
  </div>
  )
}