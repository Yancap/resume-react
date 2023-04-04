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
  const asciiArt = {
    react, node, js, ts, bootstrap, figma, sql, sass, git, html, css, python
  }
  const content = {
    react: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    node: ['Funcionamento do NodeJS', 'Requisições HTTPS', 'Express', 'API REST/RESTFUL', 'Arquitetura MVC', 
    'Middleware', 'CRUD no SQL', 'Migrations', 'KNEX'], 
    js: ['Sintaxe do Javascript', 'Lógica de Programação', 'Estruturas de Dados', 'Programação Orientada a Objetos', 'Programação Funcional', 
    'Tratamento de Erros','Manipulação do DOM', 'Eventos', 'Promises/Async Await', 'Request (FetchAPI)', 'ES6+'], 
    ts: ['Union Types', 'Types and Interfaces', 'Generics e Extends', 'Functions Overloads', 'Type Guards', 
    'Type Assertion', 'Class Modifiers', 'Tuples', 'KeyOf'], 
    bootstrap: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    figma: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    sql: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    sass: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    git: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    html: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    css: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components'], 
    python: ['Fundamentos do JSX', 'Components', 'Hooks', 'Context', 'React Routes', 
    'CSS/SASS Module', 'Styled-Components']
  }
  const time = (ms) =>{
    return new Promise(res => setTimeout(res, ms))
  }
  async function animation(){
    const elements = document.querySelectorAll("[data-li=skills]")
    for(let element of elements){
        if (!element.dataset.active) {
          await time(250)
          element.dataset.active = 'true'
        }
    }
  }
  React.useEffect(()=>{
    animation()
  },[])

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
          
        </div>
        <div className={styles.command}>
            <ul>
              {content[title].map((element, i) =>
              (<li key={i} data-li='skills'>{element}</li>)
        )}
            </ul>
        </div>
    </div>
  )
}
