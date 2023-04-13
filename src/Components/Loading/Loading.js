import React from 'react'
import styles from './Loading.module.scss'
import coffee from '../../Assets/coffee.png'
import portfolio from '../../Assets/portfolio.png'
import name from '../../Assets/name.png'

export const Loading = () => {
  return (
    <div className={styles.screen}>
        <div className={styles['container-code']}>
            <header className={styles.title}>
                <h1>
                Welcome to My Portfolio v1.0
                <br/><strong>©</strong> Copyright     
                </h1>
            </header>
            <div className={styles.metadata}>
                <ul>
                    <li>Technologies-Used: ReactJS, SCSS, SASS-Module.</li>
                    <li>Version: 1.0</li>
                    <li>HostServer: https://yangabriel.netlify.app/</li>
                    <li>Kernel: Kernel (main-OFFICIAL)</li>
                    <li>Author: Yan Gabriel Ferreira</li>
                </ul>
            </div>
            <div className={styles.states}>
                <ul>
                    <li>Bios ... ready</li>
                    <li>Settings ... ready</li>
                    <li>Assets ... ready</li>
                    <li>Components ... ready</li>
                    <li>Desktop ... ready</li>
                    <li>Apps ... ready</li>
                    <li>Utils ... ready</li>
                    <li>Animations ... ready</li>
                    <li>Scripts ... ready</li>
                    <li>Start ... ready</li>
                </ul>
            </div>
            <div className={styles.coffee}>
                <img src={coffee} alt="" srcset="" />
            </div>
        </div>
        <div className={styles['container-load']}>
            <div className={styles.logo}>
                <img src={portfolio} alt="" />
                <img src={name} alt="" />
            </div>
            <div className={styles.loading}>
                <span>Loading</span>
                <pre style={{fontFamily: 'Noto Sans SC'}}>
                </pre>
            </div>
        </div>
    </div>
  )
}
