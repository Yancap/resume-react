import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/about.png'

export const About = ({id, onClick, handleDrag, ...props}) => {
  
  
  const clientW = window.screen.width
  return (
    clientW > 800 ? 
    <div id={id} onDoubleClick={onClick} {...props} draggable data-desk onDrag={handleDrag} >
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
    :
    <div id={id} onPointerEnter={onClick} draggable data-desk onDrag={handleDrag} {...props}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
  )
}
