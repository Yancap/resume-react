import React from 'react'
import styles from './Main.module.scss'
import { MyProjects } from './Desktop/MyProjects.js'
import { About } from './Desktop/About.js'
import { Tech } from './Desktop/Tech.js'
import { Contact } from './Desktop/Contact.js'
import { SoftSkills } from './Desktop/SoftSkills.js'
import { Curriculum } from './Desktop/Curriculum.js'


export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
          <MyProjects id='my-projects'/>
          <About id='about'/>
          <Tech id='tech'/>
          <Contact id='contact'/>
          <SoftSkills id='soft-skills'/>
          <Curriculum id='curriculum'/>
      </div>
    </main>
  )
}
