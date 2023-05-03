import React from 'react'
import { Window } from './Window'
import styles from './WinAbout.module.scss'
import icon from '../../Assets/desktop/about.png'

export const WinAbout = () => {
  return (
    
      <Window target='about' icon={icon} path='Sobre Mim' minH='250px' minW='250px'>
        <div className={styles.window}>
          <p>
           Olá, me chamo Yan Gabriel Ferreira e busco minha inserção no mercado de trabalho 
           na área de tecnologia, com o objetivo de desenvolver suas 
           competências técnicas e comportamentais. Com grande paixão por 
           tecnologia e aprendizado contínuo, me destaco pela habilidades 
           comportamentais, como autodidata, proatividade, adaptabilidade, boa capacidade 
           analítica e liderança. Buscando sempre me atualizar nas tecnologias 
           que me interessam, sou empenhado em aprimorar meus 
           conhecimentos técnicos e contribuir para o crescimento das empresas em que atuar.

          </p>
        </div>
      </Window>
    
  )
}
