import React from 'react'
import { Struct } from './Struct'
import icon from '../../Assets/desktop/about.png'

export const About = ({id, onClick, ...props}) => {
  function handleDrag(event){
    console.log(event);
  }
  const clientW = window.screen.width
  return (
    clientW > 800 ? 
    <div id={id} onDoubleClick={onClick} {...props} draggable onDrag={handleDrag}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
    :
    <div id={id} onPointerEnter={onClick} {...props}>
      <Struct text='Sobre mim' icon={icon} target={id}/>
    </div>
  )
}
