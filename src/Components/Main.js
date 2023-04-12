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
  const {handleClick, active} = React.useContext(WindowContext)
  class DragDrop{
    static handleDrag(event){
      this.element = event.currentTarget
    }
    static handleDrop(event){
      event.target.appendChild(this.element)
    }
    static init(){
      this.handleDrag = this.handleDrag.bind(this)
      this.handleDrop = this.handleDrop.bind(this)
    }
  }
  DragDrop.init()
  return (
    <main className={styles.main}>
     
      <div className={styles.grid}>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <MyProjects id='my-projects' data-point='my-projects' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <About id='about' data-point='about' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>

        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <Tech id='tech' data-point='tech' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <Contact id='contact' data-point='contact' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <SoftSkills id='soft-skills' data-point='soft-skills' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            <Curriculum id='curriculum' data-point='curriculum' handleDrag={DragDrop.handleDrag} onClick={handleClick}/>
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
        </div>
          {active['my-projects'] && <WinProject />}
          {active.about && <WinAbout /> }
          {active.tech && <WinTech />}
          {active.contact && <WinContacts />}
          {active['soft-skills'] && <WinSoftSkills />}
          {active.curriculum && <WinCurriculum />}
      </div>
    </main>
  )
}
