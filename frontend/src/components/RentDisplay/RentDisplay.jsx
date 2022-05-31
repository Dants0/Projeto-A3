import axios from "axios";
import styles from './styles.module.scss'
import React, {useEffect, useState} from "react";


const baseURL = "http://localhost:3001/aluguel/carros";

const RentDisplay = () => {
    const [car, setCar] = useState(null)
  

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setCar(response.data);
      });
    }, []);

    if(!car) return null;

  return (
    <>
        <div className={styles.rentDisplayContainer}>
          <h1>{car.message}</h1>
          <p>{car.data.cpf}</p>

        </div>
        {/* <p>{car.nome}</p> */}
    </>
  )
}

export default RentDisplay;