import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext } from '../Context/WindowContext'
import { EventMove, SelectWindow } from './EventMove'
import { ResizeWindow } from '../Script/ResizeWindow.js'
import { ReactComponent as Close } from '../../Assets/close.svg'
import { ReactComponent as Fullscreen } from '../../Assets/fullscreen.svg'
import { ReactComponent as Minimize } from '../../Assets/minimize.svg'
import { ReactComponent as Resize } from '../../Assets/resize-bottom-right.svg'
import { ReactComponent as Screen } from '../../Assets/normalscreen.svg'

import styles from './Window.module.scss'

export const Window = ({icon, path, title, target, winName, ...props}) => {
    const { handleRemove, handleMinimize, handleMaximize, handleNormalize, max } = React.useContext(WindowContext)
    
    const eventMove = new EventMove()
    const selectWindow = new SelectWindow()
    const resizeWindow = new ResizeWindow()
    eventMove.init()
    resizeWindow.init()
    const clientW = window.screen.width
    if (clientW <= 500) {
        props.minH = '100%'
        props.minW = '100%'
    }
  return (
    <div data-component='window' data-target={target} onPointerDown={selectWindow.handleClick}
    {...props} className={styles.window} style={ clientW > 500 ? {minHeight: props.minH, minWidth: props.minW} : {}}>
        <header  draggable onDrag={eventMove.handleDown} onDragEnd={eventMove.handleUp} className={styles.header}>
            <div className={styles.containerSpan}>
                <div>
                    <img src={icon} alt="" srcSet="" />
                </div>
                <span>{path || winName}</span>
            </div>
            <div className={styles.containerBtn}>
                {clientW > 800 ? <>
                    <Button  onClick={handleMinimize} data-point={target}>
                        <Minimize />
                    </Button>
                    {
                        max ? (<Button onClick={
                            handleMaximize} data-point={target}>
                                <Fullscreen />
                            </Button>) :
                        (<Button onClick={handleNormalize} data-point={target}>
                            <Screen />
                        </Button>)
                    }
                    <Button  onClick={handleRemove} data-point={target}>
                        <Close />
                    </Button>
                </> 
                : clientW > 500 ?
                <>
                <Button  onPointerDown={handleMinimize} data-point={target}>
                        <Minimize />
                    </Button>
                    {
                        max ? (<Button onPointerDown={handleMaximize} data-point={target}>
                                <Fullscreen />
                            </Button>) :
                        (<Button onPointerDown={
                            handleNormalize} data-point={target}>
                            <Screen />
                        </Button>)
                    }
                    <Button  onPointerDown={handleRemove} data-point={target}>
                        <Close />
                    </Button>
                </> : 
                <Button  onPointerDown={handleRemove} data-point={target}>
                        <Close />
                </Button>
                }
            </div>
        </header>
        
        <div className={!title ? styles.center : styles.start}>
            <span className={styles.title}>{title ? title : path}</span>
        </div>
        {props.children}
        <div className={styles.resize} draggable onDrag={resizeWindow.handleDown} onDragEnd={resizeWindow.handleUp}>
            <Resize />
        </div>
    </div>
  )
}
