import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext } from '../Context/WindowContext'
import { EventMove, SelectWindow } from './EventMove'
import { ResizeWindow } from '../Script/ResizeWindow.js'
import { ReactComponent as Close } from '../../Assets/close.svg'
import { ReactComponent as Fullscreen } from '../../Assets/fullscreen.svg'
import { ReactComponent as Minimize } from '../../Assets/minimize.svg'
import { ReactComponent as Resize } from '../../Assets/resize-bottom-right.svg'
import styles from './Window.module.scss'

export const Window = ({icon, path, title, target, winName, ...props}) => {
    const { handleRemove, handleMinimize } = React.useContext(WindowContext)
    const eventMove = new EventMove()
    const selectWindow = new SelectWindow()
    const resizeWindow = new ResizeWindow()
    eventMove.init()
    resizeWindow.init()
  return (
    <div data-component='window' data-target={target} onClick={selectWindow.handleClick}
    {...props} className={styles.window} >
        <header  onMouseDown={eventMove.handleDown} onMouseUp={eventMove.handleUp} className={styles.header}>
            <div className={styles.containerSpan}>
                <div>
                    <img src={icon} alt="" srcSet="" />
                </div>
                <span>{path || winName}</span>
            </div>
            <div className={styles.containerBtn}>
                <Button  onClick={handleMinimize} data-point={target}>
                    <Minimize />
                </Button>
                <Button  data-point={target}>
                    <Fullscreen />
                </Button>
                <Button  onClick={handleRemove} data-point={target}>
                    <Close />
                </Button>
            </div>
        </header>
        
        <div className={!title ? styles.center : styles.start}>
            <span className={styles.title}>{title ? title : path}</span>
        </div>
        {props.children}
        <div className={styles.resize} onMouseDown={resizeWindow.handleDown} onMouseUp={resizeWindow.handleUp}>
            
                <Resize />
           
        </div>
    </div>
  )
}