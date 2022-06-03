import { Car, IdentificationCard, ListBullets } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export function Dashboard  () {
  return (
        <div className={styles.leftSection}>
            <span className={styles.avatar}>
                <img src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg" alt="" />
            </span>

            <div className={styles.dashboardMenu}>
                <Link to="/">
                  
                    <Car size={24}  color="black" weight="duotone"/>
                    <p> Home </p>
                  
                </Link>
                <Link to="/Register">
               
                  <IdentificationCard size={24} weight="duotone" marginLeft="16px" color="black"/>
                  <p> Cadastrar carros </p>
               
                </Link>
                <Link to="/Display">
               
                  <ListBullets size={24} weight="duotone" color="black"/>
                  <p> Listar carros </p>
            
                </Link>
            </div>
        </div>
  )
}