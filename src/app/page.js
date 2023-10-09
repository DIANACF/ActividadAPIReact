'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

  const [carritos, setCarritos] = useState([]);
  const [carga, setCarga] = useState(true);
  useEffect(() => {

    axios.get('https://fakestoreapi.com/carts')
      .then(response => {
        setCarritos(response.data);
        setCarga(false);

        console.log(response.data);
      })

  }, []
  );

  if (carga) {
    return (
      <h1>cargando...</h1>

    )
  } else {
    return (
      <div>
        {carritos.map((carrito) => {
          return (
            <div>
              <h1>carrito {carrito.id}</h1>
              <h2>{carrito.date}</h2>
            </div>


          );


        })}
      </div>

    )
  }

}
