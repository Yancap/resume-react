import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext } from '../Context/WindowContext'
import { EventMove } from './EventMove'
import { ReactComponent as Close } from '../../Assets/close.svg'
import { ReactComponent as Fullscreen } from '../../Assets/fullscreen.svg'
import { ReactComponent as Minimize } from '../../Assets/minimize.svg'

import styles from './Window.module.scss'

export const Window = ({icon, path, target, childen, ...props}) => {
    const { handleRemove, handleMinimize } = React.useContext(WindowContext)
    const eventMove = new EventMove()
    eventMove.init()
  return (
    <div onMouseDown={eventMove.handleDown}  onMouseUp={eventMove.handleUp} className={styles.window} {...props} style={{display: 'none'}} data-target={target}>
        <header className={styles.header}>
            <div className={styles.containerSpan}>
                <div>
                    <img src={icon} alt="" srcSet="" />
                </div>
                <span>{path}</span>
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
        {props.children}
    </div>
  )
}
