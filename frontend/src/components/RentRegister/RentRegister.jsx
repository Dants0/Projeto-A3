import React from 'react'
import {ChartBar, ChatTeardrop, FileSearch, User} from 'phosphor-react';
import '../../styles/responsive.css'
import './rentregister.scss';

const RentRegister = () => {
  return (
    <>
        <div className="container">
          <div className="header">
            <h1>Formulário de Registro</h1>
          </div>
          <div className="box">
            <form action="">
              <label htmlFor="">
                <User size={20} color="white" /><input type="text" placeholder="Nome"/>
              </label>
              <label htmlFor="">
                <User size={20} color="white"/><input type="text" placeholder="Sobrenome"/>
              </label>
              <label htmlFor="">
                <User size={20} color="white"/><input type="text" placeholder="CPF"/>
              </label>
              <label htmlFor="">
                <User size={20} color="white"/><input type="text" placeholder="RG"/>
              </label>
              <label htmlFor="">
                <ChartBar size={20} color="white"/><input type="text" placeholder="Status"/>
              </label>
              <label htmlFor="">
                <ChatTeardrop size={20} color="white"/><textarea placeholder="Observações"></textarea>
              </label>
              <label htmlFor="">
                <FileSearch size={20} color="white"/><input type="file"/>
              </label>
              <input type="submit" id='submitData'/>
            </form>
          </div>
        </div>
    </>
  )
}

export default RentRegister