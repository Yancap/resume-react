import React from 'react'
import { Button } from '../Common/Button'
import styles from './Footer.module.scss'
import { Hours } from './Hours'
import { Menu } from './Menu'

export const Footer = () => {
  const [active, setActive] = React.useState(false)
  function handleClick({currentTarget}){
    setActive(!active)
    console.log(currentTarget.toggleAttribute('disabled'));
  }
  return (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            <div className={styles.containerApps}>
              <div className={styles.start}>
                {active && <Menu/>}
                <Button content='Start' icon='X' onClick={handleClick}/>
              </div>
              
            </div>
            <div className={styles.containerHours}>
              <Hours />
            </div>
        </nav>
    </footer>
  )
}
