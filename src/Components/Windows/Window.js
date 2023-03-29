import React from 'react'
import { Button } from '../Common/Button'

export const Window = ({icon, path, childen}) => {
  return (
    <div>
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
