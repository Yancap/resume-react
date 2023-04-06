import React from 'react'
import { Window } from './Window'
import styles from './WinAbout.module.scss'
import icon from '../../Assets/desktop/about.png'

export const WinAbout = () => {
  return (
    
      <Window target='about' icon={icon} path='Sobre Mim'>
        <div className={styles.window}>
          <p>
            Olá, Me Chamo Yan Gabriel Ferreira.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultricies diam. 
            Nunc tempor dolor sapien, vitae tempus diam tristique sit amet. Nunc congue, metus in 
            imperdiet molestie, ligula est iaculis nulla, non accumsan erat turpis nec elit. 
            Vestibulum elementum velit eget ante fermentum ullamcorper. Pellentesque dignissim ut ligula eu 
            ullamcorper. Nulla facilisi. Sed efficitur dictum mi, nec auctor enim suscipit ut.
            ullamcorper. Nulla facilisi. Sed efficitur dictum mi, nec auctor enim suscipit ut.
            ullamcorper. Nulla facilisi. Sed efficitur dictum mi, nec auctor enim suscipit ut.
            ullamcorper. Nulla facilisi. Sed efficitur dictum mi, nec auctor enim suscipit ut.
            ullamcorper. Nulla facilisi. Sed efficitur dictum mi, nec auctor enim suscipit ut.
          </p>
        </div>
      </Window>
    
  )
}
