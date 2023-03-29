import React from 'react'
import styles from './Main.module.scss'
import { MyProjects } from './Desktop/MyProjects.js'
import { About } from './Desktop/About.js'
import { Tech } from './Desktop/Tech.js'
import { Contact } from './Desktop/Contact.js'
import { SoftSkills } from './Desktop/SoftSkills.js'
import { Curriculum } from './Desktop/Curriculum.js'
import { WinProject } from './Windows/WinProject'
import { useOpen } from './Hooks/useOpen'
import { WindowContext } from './Context/WindowContext'


export const Main = () => {
  const {handleClick} = React.useContext(WindowContext)
  
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
          <MyProjects id='my-projects' data-point='my-projects' onClick={handleClick}/>
          <About id='about'/>
          <Tech id='tech'/>
          <Contact id='contact'/>
          <SoftSkills id='soft-skills'/>
          <Curriculum id='curriculum'/>
          <WinProject />
      </div>
    </main>
  )
}
