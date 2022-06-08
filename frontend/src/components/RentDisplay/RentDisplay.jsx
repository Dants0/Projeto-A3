import axios from "axios";
import styles from './styles.module.scss'
import React, { useEffect, useState } from "react";
import { Pencil, Trash } from "phosphor-react";


const baseURL = "http://localhost:3001/aluguel/carros";
const imageURL = "http://localhost:3001/images/";

const RentDisplay = () => {

  const [car, setCar] = useState([]) //pegando array de carros

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  //method get
  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        const data = response.data.data
        setCar(data)
      }).catch(err => {
        console.log(err)
      })

  }, [])

  // method delete
  const postDelete=(id, e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:3001/aluguel/carros/${id}`)
      .then(res=>alert("ID: "+id+" Deletado", res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          {car.map((item) => {
            return (
              <>
                <div className={styles.cards}>
                  <div className={styles.controllButtons}>
                    <span><button onClick={(e)=>postDelete(item.id, e)}><Trash size={20} />Deletar</button></span>
                    <span><button onClick={toggleModal}><Pencil size={20} />Alterar</button></span>
                    {modal&&(
                    <>
                      <h2>Alterar Nome</h2>
                      <input type="text"/>
                    </>
                    )}
                  
                  </div>
                  <img src={imageURL + item.imagem} alt="Foto Da Api"/>
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