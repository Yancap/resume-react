import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/avatar.png'

export const SoftSkills = ({id,onClick, handleDrag, ...props}) => {
  const clientW = window.screen.width
  return (
    clientW > 800 ? 
    <div id={id} onClick={onClick} draggable onDrag={handleDrag} data-desk {...props}>
      <Struct text='Soft skills' icon={icon} target={id}/>
    </div>
    :
    <div id={id} onPointerEnter={onClick} draggable onDrag={handleDrag} data-desk {...props}>
      <Struct text='Soft skills' icon={icon} target={id}/>
    </div>
  )
}
