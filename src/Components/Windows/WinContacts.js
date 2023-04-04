import React from 'react'
import { Window } from './Window'
import styles from './WinContacts.module.scss'
import icon from '../../Assets/desktop/contact.png'
import { Button } from '../Common/Button'

export const WinContacts = () => {
  return (
      <Window icon={icon} path='Contatos' target='contact'>
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
            <div>
              
            </div>
        </div>
      </Window>
    
  )
}