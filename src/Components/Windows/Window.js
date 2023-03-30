import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext } from '../Context/WindowContext'
import styles from './Window.module.scss'

export const Window = ({icon, path, childen, target, ...props}) => {
    const { handleRemove, handleMinimize } = React.useContext(WindowContext)
  return (
    <div className={styles.window} {...props} style={{display: 'none'}} data-target={target}>
        <header>
            <div>
                {icon}
            </div>
            <div>
                {path}
            </div>
            <div>
                <Button text='_' onClick={handleMinimize} data-point={target}/>
                <Button text='O' data-point={target}/>
                <Button text='X' onClick={handleRemove} data-point={target}/>
            </div>
        </header>
        {childen}
    </div>
  )
}
