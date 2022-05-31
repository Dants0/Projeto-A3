import { Car, IdentificationCard, ListBullets } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.scss'

export function Dashboard  () {
  return (
        <div className={styles.leftSection}>
            <span className={styles.avatar}>
                <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg" alt="" />
            </span>

            <div className={styles.dashboardMenu}>
                <div>
                  <Car size={24} color="black" margin-left="16px"/>
                  <p> Home </p>
                </div>
                <div>
                  <IdentificationCard size={24} color="black"/>
                  <p> Cadastrar carros </p>
                </div>
                <div>
                  <ListBullets size={24} color="black"/>
                  <p> Listar carros </p>
                </div>
            </div>
        </div>
  )
}