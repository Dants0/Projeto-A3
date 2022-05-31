import React from 'react'
import {ChatTeardrop, Check, FileSearch, IdentificationCard, User} from 'phosphor-react';
import styles from './styles.module.scss';

const RentRegister = () => {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Formulário de Registro</h1>
          </div>
          <div className={styles.box}>
            <form action="">
              <label htmlFor="">
                <User size={20} color="white" /><input type="text" placeholder="Nome"/>
              </label>
              <label htmlFor="">
                <User size={20} color="white"/><input type="text" placeholder="Sobrenome"/>
              </label>
              <label htmlFor="">
                <IdentificationCard size={20} color="white"/><input type="text" placeholder="CPF"/>
              </label>
              <label htmlFor="">
                <IdentificationCard size={20} color="white"/><input type="text" placeholder="RG"/>
              </label>
              <label htmlFor="">
                <Check size={20} color="white"/><input type="text" placeholder="Status"/>
              </label>
              <label htmlFor="">
                <ChatTeardrop size={20} color="white"/><textarea placeholder="Observações"></textarea>
              </label>
              <label htmlFor="">
                <FileSearch size={20} color="white"/><input type="file"/>
              </label>
              <input type="submit" id={styles.submitData} value='Cadastrar'/>
            </form>
          </div>
        </div>
    </>
  )
}

export default RentRegister