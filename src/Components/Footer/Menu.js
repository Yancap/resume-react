import React from 'react'
import styles from './Menu.module.scss'
import { MyProjects } from '../Desktop/MyProjects.js'
import { About } from '../Desktop/About.js'
import { Tech } from '../Desktop/Tech.js'
import { Contact } from '../Desktop/Contact.js'
import { SoftSkills } from '../Desktop/SoftSkills.js'
import { Curriculum } from '../Desktop/Curriculum.js'
import { WindowContext } from '../Context/WindowContext.js'
import { SelectWindow } from '../Windows/EventMove'

export const Menu = ({mobile}) => {
  const {handleClick, active} = React.useContext(WindowContext)
  const selectWindow = new SelectWindow()
  
  function handleMobile(event){
    handleClick(event)
    selectWindow.handleClick(event, active)
  }
  return (
    <nav className={styles.menu} >
        <div className={styles.container}>
          <MyProjects id='my-projects' data-point='my-projects' onClick={mobile ? handleMobile : handleClick}/>
          <About id='about' data-point='about' onClick={mobile ? handleMobile : handleClick}/>
          <Tech id='tech' data-point='tech' onClick={mobile ? handleMobile : handleClick}/>
          <Contact id='contact' data-point='contact' onClick={mobile ? handleMobile : handleClick}/>
          <SoftSkills id='soft-skills' data-point='soft-skills' onClick={mobile ? handleMobile : handleClick}/>
          <Curriculum id='curriculum' data-point='curriculum' onClick={mobile ? handleMobile : handleClick}/>
        </div>
    </nav>
  )
}
