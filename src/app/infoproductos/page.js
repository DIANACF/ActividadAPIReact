'use client'
import Link from 'next/link';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  useEffect(() => {

    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProductos(response.data);
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
                <img src= {producto.image}></img>
              <h1> {producto.title}</h1>
              <Link href ={'/infoproductos/'+producto.id}>Ver Detalle</Link>
            </div>


          );


        })}
      </div>

    )
  }

}