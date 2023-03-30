import React from 'react'
import styles from './Main.module.scss'
import { MyProjects } from './Desktop/MyProjects.js'
import { About } from './Desktop/About.js'
import { Tech } from './Desktop/Tech.js'
import { Contact } from './Desktop/Contact.js'
import { SoftSkills } from './Desktop/SoftSkills.js'
import { Curriculum } from './Desktop/Curriculum.js'
import { WinProject } from './Windows/WinProject.js'
import { WinAbout } from './Windows/WinAbout.js'
import { WindowContext } from './Context/WindowContext.js'
import { WinTech } from './Windows/WinTech.js'
import { WinContacts } from './Windows/WinContacts.js'
import { WinSoftSkills } from './Windows/WinSoftSkills.js'
import { WinCurriculum } from './Windows/WinCurriculum.js'



export const Main = () => {
  const {handleClick} = React.useContext(WindowContext)
  
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
          <MyProjects id='my-projects' data-point='my-projects' onClick={handleClick}/>
          <About id='about' data-point='about' onClick={handleClick}/>
          <Tech id='tech' data-point='tech' onClick={handleClick}/>
          <Contact id='contact' data-point='contact' onClick={handleClick}/>
          <SoftSkills id='soft-skills' data-point='soft-skills' onClick={handleClick}/>
          <Curriculum id='curriculum' data-point='curriculum' onClick={handleClick}/>

          <WinProject />
          <WinAbout />
          <WinTech />
          <WinContacts />
          <WinSoftSkills />
          <WinCurriculum />
      </div>
    </main>
  )
}
