import React from 'react'
import styles from './styles.module.scss'

const HomeDisplay = () => {

    const displayDate = () => {
        const data = new Date()
        return data.toLocaleDateString()
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <span>Olá Admin</span>
                    </div>
                    <div className={styles.dateInfo}>
                        <span>{"Data: " + displayDate()}</span>
                    </div>
                </div>
                <div className={styles.contentInfo}>
                    <p>Esse projeto foi desenvolvido para a A3 da UC de Usabilidade Web.</p>
                </div>
                <div className={styles.contentInfo}>
                    <p>Feito com React.</p>
                </div>
                <div className={styles.contentInfo}>
                    <p>Equipe de desenvolvimento:</p>
                    <div className={styles.wrapper}>
                        <li>
                            Lucas Bacelar
                        </li>
                        <li>
                            Pedro Henrique Vinhas
                        </li>
                        <li>
                            Guilherme Dantas
                        </li>
                        <li>
                            Nicolas Pompilio Bastos
                        </li>
                        <li>
                            Vinicius Manoel O. Frias
                        </li>
                    </div>
                </div>
                <footer className={styles.footerHome}>
                    <span className={styles.spanFooter}>@ Copyright 2022. All rights reserved.</span>
                </footer>
            </div>
        </>
    )
}

export default HomeDisplay