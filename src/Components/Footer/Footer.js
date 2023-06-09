import React from 'react'
import { Button } from '../Common/Button'
import { WindowContext } from '../Context/WindowContext'
import styles from './Footer.module.scss'
import { Hours } from './Hours'
import { Menu } from './Menu'
import { Tool } from './Tool'
import { Modal } from './ModalFooter/Modal'

export const Footer = () => {
  const [active, setActive] = React.useState(false)
  const [modal, setModal] = React.useState(false)
  const {tabs, handleOpen} = React.useContext(WindowContext)
  const width = window.screen.width > 500
  function handleRight(event){
    event.preventDefault()
    document.querySelector(`[data-tool=${event.currentTarget.dataset.point}]`).style.display = 'flex'
  }
  const keys = tabs && Object.keys(tabs).map(key =>(
    <div className={styles.tab} key={key}>
      <Button icon={tabs[key].icon} onClick={handleOpen} text={tabs[key].text} data-point={tabs[key].target} mouseRight={handleRight} />
      <Tool point={tabs[key].target}/>
    </div>
    
  ))
  React.useEffect(()=>{
    if (width) {
      tabs && Object.keys(tabs).forEach(key =>{
        if (document.querySelector(`div[data-target='${tabs[key].target}']`).style.visibility === 'hidden') {
          document.querySelector(`#tabs button[data-point='${tabs[key].target}']`).removeAttribute('disabled', 'disabled')
        } else {
          document.querySelector(`#tabs button[data-point='${tabs[key].target}']`).setAttribute('disabled', 'disabled')
        }
      })
    }
    setTimeout(()=>{
      setModal(true)
    }, 10000)
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
                {width ? active && <Menu/> : <Menu mobile />}
                <Button text='Start' icon='X' onClick={handleButton}/>
              </div>
              {width && 
                <div className={styles.tabs} id='tabs'>
                  {tabs && <>{keys.map(element => element)}</>}
                </div>}
            </div>
            <div className={styles.containerHours}>
              <Hours />
            </div>
        </nav>
        {modal && <Modal />}
        
    </footer>
  )
}
