import React from 'react'
import styles from './TechHover.module.scss'
import react from '../../../Assets/tech/react-icon.png'
import rest from '../../../Assets/tech/api-rest.png'
import node from '../../../Assets/tech/node-icon.png'
import js from '../../../Assets/tech/js.png'
import ts from '../../../Assets/tech/ts.png'
import bootstrap from '../../../Assets/tech/bootstrap.png'
import figma from '../../../Assets/tech/figma.png'
import sql from '../../../Assets/tech/sql.png'
import sass from '../../../Assets/tech/sass.png'
import git from '../../../Assets/tech/git.png'
import css from '../../../Assets/tech/html-css.png'
import css_js from '../../../Assets/tech/styled-components.png'
import python from '../../../Assets/tech/python.png'
import mysql from '../../../Assets/tech/mysql.png'
import c from '../../../Assets/tech/C.png'


export const TechHover = ({tech}) => {
  const images = {react, rest, node, js, ts, bootstrap, figma, sql, sass, git, css, css_js, python, mysql, c}
  if (tech){
    tech = (tech.toLowerCase()).split(" ")
    return (
        <span className={styles.container}>
            <h6>Tecnologias utilizadas</h6>
            <div>
              {tech.map( t => <img src={images[t]} alt="" />)}
            </div>
        </span>
      )
  }
  return null
  
}
