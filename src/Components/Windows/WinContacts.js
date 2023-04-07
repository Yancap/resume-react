import React from 'react'
import { Window } from './Window'
import styles from './WinContacts.module.scss'
import icon from '../../Assets/desktop/contact.png'
import { Button } from '../Common/Button'
import { ReactComponent as Git } from '../../Assets/contact/git.svg'
import { ReactComponent as Linkedin } from '../../Assets/contact/linkedin.svg'
import { ReactComponent as Instagram } from '../../Assets/contact/instagram.svg'
import { ReactComponent as Email } from '../../Assets/contact/email.svg'
import { ReactComponent as Local } from '../../Assets/contact/local.svg'
import { ReactComponent as Phone } from '../../Assets/contact/phone.svg'

export const WinContacts = () => {
  return (
      <Window icon={icon} path='Contatos' target='contact' minW='500px' minH='410px'>
        <div className={styles.contact}>
          <form action="">
             <div className={styles.label}>
              <label htmlFor='name' >Nome</label>
              <input id='name' autocomplete='off'/>
             </div>
             <div className={styles.label}>
                <label htmlFor='email' >Email</label>
                <input id='email' autoComplete='off'/>
             </div>
             <div className={styles.label}>
                <label htmlFor='message' >Mensagem</label>
                <textarea id='message' autoComplete='off'/>
              </div>
              <Button text='Enviar'/>
            </form>
            <div className={styles.network}>
              <div className={styles.link}>
                <Linkedin />
                <a href="https://www.linkedin.com/in/yangabriel" target='_blank'>https://www.linkedin.com/in/yangabriel/</a>
              </div>
              <div className={styles.link}>
                <Git />
                <a href="https://github.com/Yancap" target='_blank'>https://github.com/Yancap</a>
              </div>
              <div className={styles.link}>
                <Instagram />
                <a href="">none</a>
              </div>
              <div className={styles.link}>
                <Local />
                <span href="">Rio de Janeiro, RJ, Brasil</span>
              </div>
              <div className={styles.link}>
                <Email />
                <span href="">yangabriel3001f@gmail.com</span>
              </div>
              <div className={styles.link}>
                <Phone />
                <span href="">(21) 99164-2554</span>
              </div>

            </div>
        </div>
      </Window>
    
  )
}