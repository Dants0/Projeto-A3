import axios from "axios";
import styles from './styles.module.scss'
import React, { useEffect, useState } from "react";
import { Pencil, Trash } from "phosphor-react";


const baseURL = "http://localhost:3001/aluguel/carros";
const imageURL = "http://localhost:3001/images/";

const RentDisplay = () => {

  const [car, setCar] = useState([])

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        const data = response.data.data
        setCar(data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.delete(baseURL)
      // .then(()=>)
  },[])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          {car.map(item => {
            return (
              <>
                <div className={styles.cards}>
                  <div className={styles.controllButtons}>
                    <span><button><Trash size={20} />Deletar</button></span>
                    <span><button><Pencil size={20} />Alterar</button></span>
                  </div>
                  <img src={imageURL + item.imagem} alt="Foto Da Api" />
                  <h1>{"Nome: " + item.nome}</h1>
                  <h2>{"Sobrenome: " + item.sobrenome}</h2>
                  <h3>{"CPF: " + item.cpf}</h3>
                  <h3>{"RG: " + item.rg}</h3>
                  <h3>{"Status: " + item.status}</h3>
                  <h3>{"Observações: " + item.observacoes}</h3>
                  <h3>{"Alugado: " + item.alugado}</h3>
                  <h3>{"Entregue: " + item.entregue}</h3>
                </div>
              </>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default RentDisplay;