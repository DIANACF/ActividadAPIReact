'use client'
import {useState} from 'react'
import axios from 'axios'

export default function Crear(){

    const [nombreP, setNombreP] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [listaProd, setListaProd] = useState([]);
function agregarCarrito(evento){
evento.preventDefault();
axios.post('https://fakestoreapi.com/carts', {
    userId:1,
    date:new Date().toISOString(),
    products: [{productId: 1,
    quantity: cantidad
    }]
}
)
.then (response => {alert('Se ha creado el carrito')}) 
}
    return(
        <>
        <form onSubmit={agregarCarrito}>
            <div>
                <label>Nombre del producto</label>
                <input type='text'value={nombreP} onChange={(evento) => {setNombreP(evento.target.value)}}></input>
            </div>
            <div>
                <label>cantidad del producto</label>
                <input type='number'value={cantidad} onChange={(evento) => {setCantidad(evento.target.value)}}></input>
            </div>
            <div>
                <button type='submit'>Crear carrito</button>
            </div>
            

        </form>
        </>
    );
}