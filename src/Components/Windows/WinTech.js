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


export const WinTech = () => {
  return (
    
      <Window icon={icon} path='Tecnologias' target='tech' title='Tecnologias que domino'>
        <div className={styles.window}>
          <Program icon={react} text='REACT'   />
          <Program icon={node} text='NODE/EXPRESS'  />
          <Program icon={javascript} text='JAVASCRIPT'  />
          <Program icon={styled} text='CSS-IN-JS'  />
          <Program icon={git} text='GIT/GITHUB'  />
          <Program icon={sql} text='SQL'  />
          <Program icon={typescript} text='TYPESCRIPT'  />
          <Program icon={sass} text='SASS/SCSS'  />
          <Program icon={python} text='PYTHON'  />
          <Program icon={html} text='HTML/CSS'  />
          <Program icon={figma} text='FIGMA'  />
          <Program icon={bootstrap} text='BOOTSTRAP'  />
          
        </div>
      </Window>
    
  )
}