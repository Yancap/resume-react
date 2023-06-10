import React from 'react'
import styles from './Modal.module.scss'

export const Modal = () => {
  return (
    <div className={styles.container}>
        <h3>
            Seja bem-vindo(a)!
        </h3>
        <p>
            Caso você não esteja com tempo para vivenciar essa experiencia
            e queira um portfolio mais direto ao ponto.
        </p>
        <p>
        Acesse:  
        <a href="https://yangabrielportfolio.netlify.app/" target="_blank">
             https://yangabrielportfolio.netlify.app/ 
        </a>
        </p>
    </div>
  )
}
