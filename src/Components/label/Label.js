import React from 'react'
import { CardConnections } from '../Common/CardConnections'
import { Avatar } from './Avatar'
import { Download } from './Download'
import { ReactComponent as Instagram} from '../../Assets/redes/instagram.svg'
import { ReactComponent as Github} from '../../Assets/redes/github.svg'
import { ReactComponent as Linkedin} from '../../Assets/redes/linkedin.svg'
import { ReactComponent as Phone} from '../../Assets/assets-icons/phone.svg'
import { ReactComponent as Mail} from '../../Assets/assets-icons/mail.svg'
import { ReactComponent as Local} from '../../Assets/assets-icons/local.svg'

import styles from './Label.module.scss'

export const Label = () => {
  return (
    <div className={styles.label}>
        <div className={styles.avatar}>
            <Avatar />
        </div>
        <div className={styles.info}>
            <h2>Yan Gabriel Ferreira</h2>
            <h3>Desenvolvedor web</h3>
            <h4>Front-end com React</h4>
            <h4>Back-end com Node</h4>
        </div>
        <div className={styles.network}>
            <a href="https://www.linkedin.com/in/yangabriel/" target='_blank'><Linkedin /></a>
            <a href="https://github.com/Yancap" target='_blank'><Github /></a>
            <a href=""><Instagram /></a>
        </div>
        <div>
            <CardConnections className={styles.card}
                objects={[
                {icon:(<Phone />), span:'Telefone', info:'(21) 99164-2554'},
                {icon:(<Mail />), span:'Email', info:'yangabriel3001f@gmail.com'},
                {icon:(<Local />), span:'Localização', info:'Rio de Janeiro, RJ, Brasil'}
                ]}
            />
        </div>
        <div>
            <Download />
        </div>
    </div>
  )
}
