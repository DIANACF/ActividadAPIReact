'use client'
import Link from 'next/link';
import Image from 'next/image'

import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home({params}) {

  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  
  useEffect(() => {

    axios.get('https://fakestoreapi.com/carts/'+params.id)
      .then(response => {
        setProductos(response.data.products);
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
        {productos.map((producto) => {
          return (
            <div>
              <h1>producto {producto.productId}</h1>
              
              <Link href ={'/infoproductos/'+producto.productId}>Ver Detalle</Link>
            </div>


          );


        })}
      </div>

    )
  }

}