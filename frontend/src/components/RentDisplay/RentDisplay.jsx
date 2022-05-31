import axios from "axios";
import React, {useEffect, useState} from "react";

const baseURL = "http://localhost:3001/aluguel/carros";

export default function RentDisplay() {
  const [car, setCar] = useState()

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => setCar(response.data))
      .catch((error) =>{
        console.error('ocorreu um erro' + error)
      })
  },[])

  // console.log(car.data.name)

  return (
    <>
      <h1>{car.message}</h1>
      {/* <p>{car.nome}</p> */}
    </>
  );
}