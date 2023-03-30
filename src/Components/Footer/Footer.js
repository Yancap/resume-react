import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext, WindowStorage } from '../Context/WindowContext'
import styles from './Footer.module.scss'
import { Hours } from './Hours'
import { Menu } from './Menu'

export const Footer = () => {
  const [active, setActive] = React.useState(false)
  const {tabs, handleOpen} = React.useContext(WindowContext)
  const keys = tabs && Object.keys(tabs).map(key =>(
    <Button key={key} icon={tabs[key].icon} onClick={handleOpen} text={tabs[key].text} data-point={tabs[key].target} />
  ))
  React.useEffect(()=>{
    tabs && Object.keys(tabs).forEach(key =>{
      document.querySelector(`#tabs button[data-point='${tabs[key].target}']`).setAttribute('disabled', 'disabled')
    })
  }, [tabs])
  
  
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
                <Button text='Start' icon='X' onClick={handleButton}/>
              </div>
              <div className={styles.tabs} id='tabs'>
                
                {tabs && <>{keys.map(element => element)}</>}
                
              </div>
            </div>
            <div className={styles.containerHours}>
              <Hours />
            </div>
        </nav>
    </footer>
  )
}
