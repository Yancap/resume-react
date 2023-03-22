import React from 'react'
import { Label } from './label/Label'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Label />
    </main>
  )
}
