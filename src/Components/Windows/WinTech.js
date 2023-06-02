import React from 'react'
import { Window } from './Window'
import icon from '../../Assets/desktop/tech.png'
import { Program } from './Program/Program'
import styles from './WinTech.module.scss'
import react from '../../Assets/tech/react-icon.png'
import node from '../../Assets/tech/node-icon.png'
import javascript from '../../Assets/tech/js.png'
import styled from '../../Assets/tech/styled-components.png'
import git from '../../Assets/tech/git.png'
import sql from '../../Assets/tech/sql.png'
import typescript from '../../Assets/tech/ts.png'
import sass from '../../Assets/tech/sass.png'
import python from '../../Assets/tech/python.png'
import html from '../../Assets/tech/html-css.png'
import figma from '../../Assets/tech/figma.png'
import bootstrap from '../../Assets/tech/bootstrap.png'
import tailwind from '../../Assets/tech/tailwind.png'
import nextjs from '../../Assets/tech/nextjs.png'
import csharp from '../../Assets/tech/csharp.png'

import { WindowContext } from '../Context/WindowContext'
import { Prompt } from './Prompt'


export const WinTech = () => {
  const {handleClick, active} = React.useContext(WindowContext)
  return (
      <>
      <Window icon={icon} path='Tecnologias' target='tech' title='Tecnologias que domino' minH='385px' minW='475px'>
        <div className={styles.window}>
          <Program icon={react} data-point='react' data-desktop='react' text='REACT' handleClick={handleClick} />
          <Program icon={node} text='NODE/EXPRESS' data-point='node' data-desktop='node' handleClick={handleClick} />
          <Program icon={javascript} text='JAVASCRIPT'  data-point='js' data-desktop='js' handleClick={handleClick}/>
          <Program icon={styled} text='CSS-IN-JS'  data-point='cssInJs' data-desktop='cssInJs' handleClick={handleClick}/>
          <Program icon={git} text='GIT/GITHUB'  data-point='git' data-desktop='git' handleClick={handleClick}/>
          <Program icon={sql} text='SQL'  data-point='sql' data-desktop='sql' handleClick={handleClick}/>
          <Program icon={typescript} text='TYPESCRIPT'  data-point='ts' data-desktop='ts' handleClick={handleClick}/>
          <Program icon={sass} text='SASS/SCSS'  data-point='sass' data-desktop='sass' handleClick={handleClick}/>
          <Program icon={python} text='PYTHON'  data-point='python' data-desktop='python' handleClick={handleClick}/>
          <Program icon={html} text='HTML/CSS'  data-point='html' data-desktop='html' handleClick={handleClick}/>
          <Program icon={figma} text='FIGMA'  data-point='figma' data-desktop='figma' handleClick={handleClick}/>
          <Program icon={bootstrap} text='BOOTSTRAP'  data-point='bootstrap' data-desktop='bootstrap' handleClick={handleClick}/>
          <Program icon={tailwind} text='TAILWIND'  data-point='tailwind' data-desktop='tailwind' handleClick={handleClick}/>
          <Program icon={nextjs} text='NEXT JS'  data-point='nextjs' data-desktop='nextjs' handleClick={handleClick}/>
          <Program icon={csharp} text='C#'  data-point='csharp' data-desktop='csharp' handleClick={handleClick}/>
        </div>
      </Window>
          {active.react && 
            <Window icon={icon} target='react' winName='Prompt' minH='285px' minW='405px'>
                <Prompt title='react'/>
            </Window>
          }
          {active.node && <Window icon={icon} target='node' minH='285px' minW='405px'>
              <Prompt title='node'/>
          </Window> 
          }
          {active.js && <Window icon={icon} target='js' minH='285px' minW='405px'>
              <Prompt title='js'/>
          </Window>
          }
          {active.cssInJs &&<Window icon={icon} target='cssInJs' minH='285px' minW='405px'>
              <Prompt title='css'/>
          </Window>
          }
          {active.git && <Window icon={icon} target='git' minH='285px' minW='405px'>
              <Prompt title='git'/>
          </Window>
          }
          {active.ts && <Window icon={icon} target='ts' minH='285px' minW='405px'>
              <Prompt title='ts'/>
          </Window>
          }
          {active.sass && <Window icon={icon} target='sass' minH='285px' minW='405px'>
              <Prompt title='sass'/>
          </Window>}
          {active.python && <Window icon={icon} target='python' minH='285px' minW='405px'>
              <Prompt title='python'/>
          </Window>}
          {active.html && <Window icon={icon} target='html' minH='285px' minW='405px'>
              <Prompt title='html'/>
          </Window>}
          {active.figma && <Window icon={icon} target='figma' minH='285px' minW='405px'>
              <Prompt title='figma'/>
          </Window>}
          {active.bootstrap && <Window icon={icon} target='bootstrap' minH='285px' minW='405px'>
              <Prompt title='bootstrap'/>
          </Window>}
          {active.sql && <Window icon={icon} target='sql' minH='285px' minW='405px'>
              <Prompt title='sql'/>
          </Window>}
          {active.tailwind && <Window icon={icon} target='tailwind' minH='285px' minW='405px'>
              <Prompt title='tailwind'/>
          </Window>}
          {active.nextjs && <Window icon={icon} target='nextjs' minH='285px' minW='405px'>
              <Prompt title='nextjs'/>
          </Window>}
          {active.csharp && <Window icon={icon} target='csharp' minH='285px' minW='405px'>
              <Prompt title='csharp'/>
          </Window>}
      </>
      
    
  )
}