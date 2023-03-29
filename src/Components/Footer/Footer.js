import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext, WindowStorage } from '../Context/WindowContext'
import { useOpen } from '../Hooks/useOpen'
import styles from './Footer.module.scss'
import { Hours } from './Hours'
import { Menu } from './Menu'
import { Tab } from './Tab'

export const Footer = () => {
  const [active, setActive] = React.useState(false)
  const {tabs, handleClick} = React.useContext(WindowContext)
  const keys = tabs && Object.keys(tabs).map(key =>(
    <Tab key={key} icon={tabs[key].icon} text={tabs[key].text} target={tabs[key].icon}/>
  ))
  console.log(tabs);
  console.log(keys);
  function handleButton({currentTarget}){
    setActive(!active)
    currentTarget.toggleAttribute('disabled')
  }
  return (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            <div className={styles.containerApps}>
              <div className={styles.start}>
                {active && <Menu/>}
                <Button content='Start' icon='X' onClick={handleButton}/>
              </div>
              <div>
                
                {tabs && <>{keys[0]}</>}
                
              </div>
            </div>
            <div className={styles.containerHours}>
              <Hours />
            </div>
        </nav>
    </footer>
  )
}
