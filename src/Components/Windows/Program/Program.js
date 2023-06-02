import React from 'react'
import styles from './Program.module.scss'


export const Program = ({icon, text, path, github, setLink, handleClick, ...props}) => {
    
    function open({currentTarget}){
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
    const clientW = window.screen.width
    if (clientW > 500) {
      return (
        <div 
        className={styles.project} 
        onMouseOut={mouseOut} 
        onDoubleClick={handleClick ? handleClick : open} 
        data-path={path} 
        onPointerOver={() => props.setTech ? props.setTech(props.tech) : null} 
        onPointerOut={() =>  props.setTech && props.setTech(null)}
        {...props}>
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
    return (
      <div className={styles.project} onMouseOut={mouseOut} 
      onPointerDown={handleClick ? handleClick : open} 
      data-path={path} {...props} onPointerOver={() => console.log('a')}>
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