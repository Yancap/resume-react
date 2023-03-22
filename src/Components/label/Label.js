import React from 'react'
import { CardConnections } from '../Common/CardConnections'
import { Avatar } from './Avatar'
import { Download } from './Download'
import { ReactComponent as Instagram} from '../../Assets/redes/instagram.svg'
import { ReactComponent as Github} from '../../Assets/redes/github.svg'
import { ReactComponent as Linkedin} from '../../Assets/redes/linkedin.svg'
import styles from './Label.module.scss'

export const Label = () => {
  return (
    <div className={styles.label}>
        <div>
            <Avatar />
        </div>
        <div>
            <h2>Yan Gabriel</h2>
            <h3>Dev web</h3>
            <h4>Front-end</h4>
            <h4>Back-end</h4>
        </div>
        <div>
            <Linkedin />
            <Github />
            <Instagram />
        </div>
        <div>
            <CardConnections objects={[
                {icon:'', span:'Telefone', info:'(21) 99164-2554'},
                {icon:'', span:'Email', info:'yangabriel3001f@gmail.com'},
                {icon:'', span:'Localização', info:'Rio de Janeiro, RJ, Brasil'}]}/>
        </div>
        <div>
            <Download />
        </div>
    </div>
  )
}
