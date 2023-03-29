import React from 'react'
import { Button } from '../Common/Button'
import styles from './Window.module.scss'

export const Window = ({icon, path, childen, ...props}) => {
  return (
    <div className={styles.window} {...props} style={{display: 'none'}}>
        <header>
            <div>
                {icon}
            </div>
            <div>
                {path}
            </div>
            <div>
                <Button icon='_'/>
                <Button icon='O'/>
                <Button icon='X'/>
            </div>
        </header>
        {childen}
    </div>
  )
}
