import React from 'react'
import Logo from '../../Imagenes/LogoRangers.png'
import style from './ProductosTienda.module.css'
import { Link } from 'react-router-dom'
import { addToCar } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductosTienda({productos, filtrar}){
    
    const dispatch = useDispatch();
    const carrito = useSelector(state => state.carrito)

/*     const agregarCantidad = (producto) => {
        const product = carrito.filter(c => c._id === producto._id)
        product[0].cantidad += 1
    } */

    const agregarCarrito = (producto) => {
                const pro = {
                    image: producto.image, 
                    price: producto.price, 
                    name: producto.name, 
                    id: producto._id,
                    cantidad: 1
                }
                dispatch(addToCar(pro))
     }


    return(

        <div className={style.container}>
            <div className={style.gridPro}> 
                {filtrar.length === 0 ?

                typeof productos !== 'string' ? productos?.map(snack => (

                    <div className={style.producto}>
                        <Link to={`/carrito/${snack._id}`}> 
                        <div className={style.img}>
                            <img src={snack.image} alt="Imagen del producto no encontrada"/>
                            <button className={style.mor}>Seleccionar opciones</button>
                        </div>
                        </Link> 
                        <div className={style.comprar}>
                            <p className={style.tipo}>{snack.type.name}</p>
                            <div className={style.botton}>
                                <p>{snack.name}</p>
                                <button onClick={() => {agregarCarrito(snack)}}>Agregar<span class="material-icons-round">add_shopping_cart</span></button> 
                            </div>
                            <p className={style.precio}>$ {snack.price}</p>
                        </div>
                    </div>
                    
                ))
                : 
                <h1>
                    No se encontraron productos
                </h1>
                :
                
                filtrar?.map(snack => (

                    <Link to={`/carrito/${snack._id}`}>
                    <div className={style.producto}>
                        <div className={style.img}>
                            <img src={snack.image} alt="Imagen del producto no encontrada"/>
                            <button className={style.mor}>Seleccionar opciones</button>
                        </div>
                        <div className={style.comprar}>
                            <p className={style.tipo}>{snack.type.name}</p>
                            <div className={style.botton}>
                                <p>{snack.name}</p>
                                 <button onClick={() => dispatch(addToCar(snack))}><span class="material-icons-round">shopping_cart</span></button> 
                            </div>
                            <p className={style.precio}>$ {snack.price}</p>
                        </div>
                        

                    </div>
                    </Link>
                ))

                }     
            </div>  
        </div>
    )
}