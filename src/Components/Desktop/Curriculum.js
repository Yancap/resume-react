import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/curriculo.png'

export const Curriculum = ({id, onClick, handleDrag, ...props}) => {
  const clientW = window.screen.width
  return (
    clientW > 800 ? 
    <div id={id} onDoubleClick={onClick} draggable onDrag={handleDrag} data-desk {...props}>
      <Struct text='Curriculo' icon={icon} target={id}/>
    </div>
    :
    <div id={id} onPointerEnter={onClick} draggable onDrag={handleDrag} data-desk {...props}>
      <Struct text='Curriculo' icon={icon} target={id}/>
    </div>
  )
}
