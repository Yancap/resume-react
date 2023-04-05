import React from 'react'
import { Window } from './Window'
import styles from './WinCurriculum.module.scss'
import icon from '../../Assets/desktop/curriculo.png'
import { Button } from '../Common/Button'
import pdf from '../../Assets/download/curriculo.pdf'

export const WinCurriculum = () => {
  return (
    
      <Window icon={icon} path='Curriculo' target='curriculum'>
        <article className={styles.window}>
          <header className={styles.content}>
            <h1 className={styles.title}>Yan Gabriel Ferreira</h1>
            <ul>
              <li className={styles.paragraph}>19 Anos</li>
              <li className={styles.paragraph}>Rio de Janeiro, RJ, Brasil</li>
              <li className={styles.paragraph}>(21) 99164-2554</li>
            </ul>
          </header>

          <section className={styles.content}>
            <h2 className={styles.title}>RESUMO DAS QUALIFICAÇÕES</h2>
            <p className={styles.paragraph}>
              Busco minha inserção no mercado de trabalho, com objetivo de desenvolver minhas competências
              técnicas e comportamentais, focando em trazer resultado para empresa e equipe. Das habilidades
              que pude desenvolver na minha trajetória acadêmica e de vida, destaco proatividade, adaptabilidade, 
              boa capacidade analítica e liderança.
            </p>
          </section>
          
          <section className={styles.content}>
            <h2 className={styles.title}>EXPERIÊNCIAS PROFISSIONAIS</h2>
            <h3 className={styles.subtitle}>Sem Experiencia Profissional até o momento</h3>
            <li className={styles.paragraph}>
            Porém, faço projetos pessoais com as tecnologias que domino e lidero a criação de projetos no
            curso técnico de desenvolvimento de sistemas que participo.
            </li>
          </section>

          <section className={styles.content}>
            <h2 className={styles.title}>FORMAÇÃO ACADÊMICA</h2>
            <h3 className={styles.subtitle}>Técnico em Desenvolvimento de Sistemas - em Curso</h3>
            <p className={styles.paragraph}>
            Fundação Bradesco | 2022 - 2024
            </p>
          </section>

          <section className={styles.content}>
            <h2 className={styles.title}>HABILIDADE TÉCNICAS</h2>
            <div className={styles.list}>
              <div>
                <li className={styles.paragraph}>HTML5 & CSS3 - Avançado</li>
                <li className={styles.paragraph}>JAVASCRIPT - Avançado</li>
                <li className={styles.paragraph}>BOOTSTRAP - Avançado</li>
                <li className={styles.paragraph}>PYTHON - Avançado</li>
                <li className={styles.paragraph}>Ui Design / Figma - Intermediário</li>
              </div>
              <div>
                <li className={styles.paragraph}>REACTJS - Intermediário</li>
                <li className={styles.paragraph}>NODEJS/Express - Intermediário</li>
                <li className={styles.paragraph}>SQL - Intermediário</li>
                <li className={styles.paragraph}>TYPESCRIPT - Básico</li>
                <li className={styles.paragraph}>PHP - Básico</li>
              </div>
            </div>
            <h4 className={styles.subtitle}>Também possuo conhecimentos em POO, Bibliotecas React, 
              Bibliotecas NodeJs, Arquitetura MVC, GIT & GITHUB e Web Design.
            </h4>
          </section>

          <section className={styles.content}>
            <h2 className={styles.title}>HABILIDADE COMPORTAMENTAIS</h2>
            <div className={styles.list}>
              <div>
                <li className={styles.paragraph}>LIDERANÇA</li>
                <li className={styles.paragraph}>ADAPTABILIDADE</li>
                <li className={styles.paragraph}>PROATIVIDADE</li>
              </div>
              <div>
                <li className={styles.paragraph}>COMUNICAÇÃO</li>
                <li className={styles.paragraph}>EMPATIA</li>
                <li className={styles.paragraph}>CAPACIDADE ANALÍTICA</li>
              </div>
            </div>
          </section>

          <section className={styles.content}>
            <h2 className={styles.title}>CURSOS REALIZADOS</h2>
            <li className={styles.paragraph}>Curso HTML5, CSS3, Javascript Avançado - Completo - Origamid</li>
            <li className={styles.paragraph}>Curso de Ui Design - Completo - Origamid</li>
            <li className={styles.paragraph}>Curso de ReactJS - Completo - Origamid</li>
            <li className={styles.paragraph}>Curso de NodeJs/Express - Em Curso - Rocketseat Explorer</li>
            <li className={styles.paragraph}>Curso de Typescript para Iniciantes- Completo - Origamid</li>
            <li className={styles.paragraph}>Curso de PHP - Em Curso - Upinside</li>
          </section>

          <section className={styles.content}>
            <h2 className={styles.title}>IDIOMAS</h2>
            <li className={styles.paragraph}>INGLÊS - Básico/Instrumental</li>
          </section>


        </article>
        <div className={styles.download}> 
          <Button>
            <a href={pdf} download="curriculo">Download CV</a>
          </Button>
        </div>

      </Window>
    
  )
}