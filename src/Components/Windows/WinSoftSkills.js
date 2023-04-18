import React from 'react'
import { Window } from './Window'
import styles from './WinSoftSkills.module.scss'
import icon from '../../Assets/desktop/avatar.png'
import empathy from '../../Assets/gifs/empatia.gif'
import communication from '../../Assets/gifs/comunicação.gif'
import proactivity from '../../Assets/gifs/proatividade.gif'
import adaptability from '../../Assets/gifs/adaptabilidade.gif'
import leadership from '../../Assets/gifs/liderança.gif'
import analytics from '../../Assets/gifs/capacidade analitica.gif'


export const WinSoftSkills = () => {
  return (
    
      <Window icon={icon} path='Soft Skills' target='soft-skills' minH='350px' minW='400px'>
        <div className={styles.window}>

          <div className={styles.skill}>
            <img src={empathy} alt="empatia" srcset="" />
            <span>
              Empatia
            </span>
          </div>
          <div className={styles.skill}>
            <img src={communication} alt="comunicação" srcset="" />
            <span>
              Comunicação
            </span>
          </div>
          <div className={styles.skill}>
            <img src={proactivity} alt="Proatividade" srcset="" />
            <span>
              Proatividade
            </span>
          </div>
          <div className={styles.skill}>
            <img src={adaptability} alt="Adaptabilidade" srcset="" />
            <span>
              Adaptabilidade
            </span>
          </div>
          <div className={styles.skill}>
            <img src={leadership} alt="Liderança" srcset="" />
            <span>
              Liderança
            </span>
          </div>
          <div className={styles.skill}>
            <img src={analytics} alt="Capacidade Analítica" srcset="" />
            <span>
              Capacidade Analítica
            </span>
          </div>

        </div>
      </Window>
    
  )
}