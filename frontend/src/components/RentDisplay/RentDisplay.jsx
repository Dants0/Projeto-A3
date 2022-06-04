import axios from "axios";
import styles from './styles.module.scss'
import React, {useEffect, useState} from "react";


const baseURL = "http://localhost:3001/aluguel/carros";

const RentDisplay = () => {

  const [car, setCar] = useState([])

  useEffect(()=>{
    axios.get(baseURL)
    .then(response=>{
      const data = response.data.data
      setCar(data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <div className="container"></div>
      {car.map(item=>{
        return (
        <>
          <h1>{item.nome}</h1>
          <h2>{item.sobrenome}</h2>
          <h3>{item.cpf}</h3>
          <h3>{item.rg}</h3>
          <h3>{item.status}</h3>
          <h3>{item.observacoes}</h3>
        </>
          )
          }
      )}
    </>
  )
}

export default RentDisplay;