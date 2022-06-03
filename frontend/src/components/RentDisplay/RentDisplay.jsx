import axios from "axios";
import styles from './styles.module.scss'
import React, {useEffect, useState} from "react";


const baseURL = "http://localhost:3001/aluguel/carros/54";

const RentDisplay = () => {
    const [car, setCar] = useState(null)

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        const data = response.data
        setCar(data)
        console.log(data);
      });
    }, []);
    
    if(!car) return null;
    // if(!response) return null;

  return (
    <>
        <div className={styles.rentDisplayContainer}>
          {/* <h1>{data.message}</h1> */}
          {/* <h1>{car.nome}</h1> */}
        </div>
    </>
  )
}

export default RentDisplay;