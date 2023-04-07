import React from 'react'
import { Window } from './Window'
import icon from '../../Assets/desktop/tech.png'
import { Program } from './Program/Program'
import styles from './WinTech.module.scss'
import react from '../../Assets/tech/react-icon.svg'
import node from '../../Assets/tech/node-icon.svg'
import javascript from '../../Assets/tech/js.svg'
import styled from '../../Assets/tech/styled-components.svg'
import git from '../../Assets/tech/git.svg'
import sql from '../../Assets/tech/sql.svg'
import typescript from '../../Assets/tech/ts.svg'
import sass from '../../Assets/tech/sass.svg'
import python from '../../Assets/tech/python.svg'
import html from '../../Assets/tech/html-css.svg'
import figma from '../../Assets/tech/figma.svg'
import bootstrap from '../../Assets/tech/bootstrap.svg'
import { WindowContext } from '../Context/WindowContext'
import { Prompt } from './Prompt'


export const WinTech = () => {
  const {handleClick, active} = React.useContext(WindowContext)
  console.log(active);
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
        </div>
      </Window>
          {active.react && 
            <Window icon={icon} target='react' winName='Prompt'>
                <Prompt title='react'/>
            </Window>
          }
          {active.node && <Window icon={icon} target='node'>
              <Prompt title='node'/>
          </Window> 
          }
          {active.js && <Window icon={icon} target='js'>
              <Prompt title='js'/>
          </Window>
          }
          {active.cssInJs &&<Window icon={icon} target='cssInJs'>
              <Prompt title='css'/>
          </Window>
          }
          {active.git && <Window icon={icon} target='git'>
              <Prompt title='git'/>
          </Window>
          }
          {active.ts && <Window icon={icon} target='ts'>
              <Prompt title='ts'/>
          </Window>
          }
          {active.sass && <Window icon={icon} target='sass'>
              <Prompt title='sass'/>
          </Window>}
          {active.python && <Window icon={icon} target='python'>
              <Prompt title='python'/>
          </Window>}
          {active.html && <Window icon={icon} target='html'>
              <Prompt title='html'/>
          </Window>}
          {active.figma && <Window icon={icon} target='figma'>
              <Prompt title='figma'/>
          </Window>}
          {active.bootstrap && <Window icon={icon} target='bootstrap'>
              <Prompt title='bootstrap'/>
          </Window>}
          {active.sql && <Window icon={icon} target='sql'>
              <Prompt title='sql'/>
          </Window>}
      </>
      
    
  )
}