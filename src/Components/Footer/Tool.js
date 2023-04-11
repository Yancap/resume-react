import React from 'react'
import { WindowContext } from '../Context/WindowContext'
import { Button } from '../Common/Button'
import styles from './Tool.module.scss'
import { ReactComponent as Close } from '../../Assets/close.svg'
import { ReactComponent as Fullscreen } from '../../Assets/fullscreen.svg'
import { ReactComponent as Minimize } from '../../Assets/minimize.svg'
import { ReactComponent as Screen } from '../../Assets/normalscreen.svg'


export const Tool = ({point}) => {
    
    const {handleMaximize, handleRemove, handleNormalize, handleMinimize, handleOpen, max, min} = React.useContext(WindowContext)
  return (
    <div className={styles.tool} style={{display: 'none'}} data-tool={point}>
        <div className={styles.container}>
            {max ?
            <Button onClick={handleMaximize} data-point={point}
                text='Maximizar'
            >
                <Fullscreen />
            </Button>  
            : 
            <Button onClick={handleNormalize} data-point={point}
                text='Redimensionar'
            >
                <Screen />
            </Button> 
            }
            {min ? 
                <Button onClick={ handleMinimize} data-point={point}
                    text='Minimizar'
                >
                    <Minimize />
                </Button>
            : <Button onClick={handleOpen} data-point={point}
                text='Abrir'
            >
                <Minimize />
            </Button>
            }
            

            
            <Button onClick={handleRemove} data-point={point}
                text='Fechar a Janela'
            >
                <Close />
            </Button>
        </div>
        
    </div>
  )
}
