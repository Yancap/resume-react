import React from 'react'
import styles from './Modal.module.scss'

export const Modal = () => {
  return (
    <div className={styles.container}>
        <p>
            Caso você não esteja com tempo para vivenciar essa experiencia
            e queira um portfolio mais direto ao ponto.
        </p> 
        <a href="https://yangabrielportfolio.netlify.app/" target="_blank">
             https://yangabrielportfolio.netlify.app/ 
        </a>
    </div>
  )
}
