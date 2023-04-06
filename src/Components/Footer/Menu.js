import React from 'react'
import styles from './Menu.module.scss'
import { MyProjects } from '../Desktop/MyProjects.js'
import { About } from '../Desktop/About.js'
import { Tech } from '../Desktop/Tech.js'
import { Contact } from '../Desktop/Contact.js'
import { SoftSkills } from '../Desktop/SoftSkills.js'
import { Curriculum } from '../Desktop/Curriculum.js'
import { WindowContext } from '../Context/WindowContext.js'


export const Menu = () => {
  const {handleClick} = React.useContext(WindowContext)
  return (
    <nav className={styles.menu}>
        <div className={styles.container}>
          
            <MyProjects id='my-projects' data-point='my-projects' onClick={handleClick}/>
          <About id='about' data-point='about' onClick={handleClick}/>
          <Tech id='tech' data-point='tech' onClick={handleClick}/>
          <Contact id='contact' data-point='contact' onClick={handleClick}/>
          <SoftSkills id='soft-skills' data-point='soft-skills' onClick={handleClick}/>
          <Curriculum id='curriculum' data-point='curriculum' onClick={handleClick}/>
        </div>
    </nav>
  )
}
