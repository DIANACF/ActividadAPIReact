'use client'
import Link from 'next/link';
import Image from 'next/image'

import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home({params}) {

  const [producto, setProducto] = useState({});
  const [carga, setCarga] = useState(true);
  
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products/'+params.id)
      .then(response => {
        setProducto(response.data);
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
      <div >
        <h1>{producto.title}</h1>
        <img src={producto.image} ></img>
        <h2>$ {producto.price}</h2>
      </div>

    )
  }

}