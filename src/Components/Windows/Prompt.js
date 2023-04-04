import React from 'react'
import react from '../../Assets/ascii-art/react.svg'
import node from '../../Assets/ascii-art/nodejs.svg'
import js from '../../Assets/ascii-art/js.svg'
import ts from '../../Assets/ascii-art/ts.svg'
import bootstrap from '../../Assets/ascii-art/bootstrap.svg'
import figma from '../../Assets/ascii-art/figma.svg'
import sql from '../../Assets/ascii-art/sql.svg'
import sass from '../../Assets/ascii-art/sass.svg'
import git from '../../Assets/ascii-art/git.svg'
import html from '../../Assets/ascii-art/html-css.svg'
import css from '../../Assets/ascii-art/css-in-js.svg'
import python from '../../Assets/ascii-art/python.svg'
import styles from './Prompt.module.scss'

export const Prompt = ({title}) => {
  const [tech, setTech] = React.useState(false)
  const [elements, setElements] = React.useState()
  const asciiArt = {
    react, node, js, ts, bootstrap, figma, sql, sass, git, html, css, python
  }
  const content = {
    react: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'] , 
    node, 
    js, 
    ts, 
    bootstrap, 
    figma, 
    sql, 
    sass, 
    git, 
    html, 
    css, 
    python
  }
  function handleEnter(event){
    if (event.key === 'Enter') {
      if (event.currentTarget.value === 'help'){
        event.currentTarget.setAttribute('disabled', 'disabled')
        setTech(true)
      }
      
    }
  }
  function showSkills(element){
    return(
        content[title].map(element => {
          setTimeout(()=>{
            setElements(<li style={{display:'block'}} data-active>{element}</li>)
          }, 300)
        })
    )
  }
  return (
    <div className={styles.prompt}>
        <div className={styles.ascii}>
          <img src={asciiArt[title]} alt="" />
        </div>
        <div className={styles.command}>
          <span>
              Welcome to my portfolio
              <br/>type "help" to see my skills...
          </span>
          <div>
            <label htmlFor="prompt">{'>> '}</label>
            <input autocomplete="off"  id="prompt" type="text" onKeyDown={handleEnter}/>
          </div>
          
        </div>
        <div className={styles.command}>
          <span>
            <ul>
              {tech ? showSkills() : null}{
                console.log(elements)
              }
            </ul>
          </span>
        </div>
    </div>
  )
}
