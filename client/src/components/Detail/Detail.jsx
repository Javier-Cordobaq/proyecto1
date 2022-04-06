import React from 'react'
import Nav from '../Nav/Nav'
import style from '../Detail/Detail.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCar } from '../../redux/actions'

const Detail = () => {

    const productos = useSelector(state => state.productos)
    const carrito = useSelector(state => state.carrito)
    console.log(carrito, 'Carrito')
    const {id} = useParams();

    const producto = productos.filter(c => c?._id === id)
    console.log(producto)

    const dispatch = useDispatch();

    const agregarCarrito = (producto) => {
       if(carrito.includes(producto)){
           alert('Ya agregaste el producto')
       } else {
           dispatch(addToCar(producto))
       }
    }

  return (
    <div className={style.centrar}>
        <Nav/>
        <div className={style.globalCont}>
            <div className={style.imagen}>
                <img src={producto.length !== 0 ? producto[0].image : null} alt='Not Found' />
            </div>
            <div className={style.texto}>
                <h1>{producto.length !== 0 ? producto[0].name : null}</h1>
                <p>$ {producto.length !== 0 ? producto[0].price : null}</p>
                <p>El clásico, el de toda la vida. Canguil natural con un toque de sal marina.
                    Reventamos el maíz en aire caliente luego 
                    rociamos un poco de aceite para que la sal se adhiera al producto de manera perfecta.
                    </p>
                <button onClick={() => {agregarCarrito(producto[0])}}>Añadir al carrito</button>
            </div>
        </div>
    </div>
  )
}

export default Detail