'use client'
import {useState} from 'react'
import axios from 'axios'

export default function crearProducto() {

    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descriptionP, setDescriptionP] = useState('');
    const [imagen, setImagen] = useState('');
    const [categoria, setCategoria] = useState('');

function crearProducto(evento){
    evento.preventDefault();
    axios.post('https://fakestoreapi.com/products', {
        title: titulo,
        price: precio,
        description: descriptionP,
        image: imagen, 
        category: categoria
    }
    )
    .then(response => {alert('Se ha creado el producto fatisfactoriamente')});
    

}

    return(
        <>
        <form onSubmit={crearProducto}>
            <div>
                <label>Nombre del producto nuevo</label>
                <input type='text'value={titulo} onChange={(evento) => {setTitulo(evento.target.value)}}></input>
            </div>

            <div>
                <label>Precio</label>
                <input type='number' value={precio} onChange={(evento) => {setPrecio(evento.target.value)}}></input>
            </div>

            <div>
                <label>Descripción</label>
                <input type='text' value={descriptionP} onChange={(evento) => {setDescriptionP(evento.target.value)}}></input>
            </div>

            <div>
                <label>Imagen</label>
                <input type='text' value={imagen} onChange={(evento) => {setImagen(evento.target.value)}}></input>
            </div>

            <div>
                <label>Categoria</label>
                <input type='text'value={categoria} onChange={(evento) => {setCategoria(evento.target.value)}}></input>
            </div>

            <div>
                <button type='submit'>Crear producto</button>

            </div>
        </form>
        
        </>
    );
}