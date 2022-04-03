import React from 'react'
import Logo from '../../Imagenes/LogoRangers.png'
import style from './ProductosTienda.module.css'
import { Link } from 'react-router-dom'

export default function ProductosTienda({productos, filtrar}){



    return(
        <div className={style.container}>
            <div className={style.gridPro}> 
                {filtrar.length === 0 ?

                typeof productos !== 'string' ? productos?.map(snack => (

                    <Link to='/'>
                    <div className={style.producto}>
                        <div className={style.img}>
                            <img src={snack.image} alt="Imagen del producto no encontrada"/>
                            <button className={style.mor}>Seleccionar opciones</button>
                        </div>
                        <div className={style.comprar}>
                            <p>{snack.price}</p>
                            <div className={style.botton}>
                                <p>{snack.name}</p>
                                <button>+<span class="material-icons-round">shopping_cart</span></button>
                            </div>
                            <div className={style.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
                            </div>
                            <p>{snack.type.name}</p>
                        </div>
                        

                    </div>
                    </Link>
                ))
                : 
                <h1>
                    No se encontraron productos
                </h1>
                :
                
                filtrar?.map(snack => (

                    <Link to='/'>
                    <div className={style.producto}>
                        <div className={style.img}>
                            <img src={snack.image} alt="Imagen del producto no encontrada"/>
                            <button className={style.mor}>Seleccionar opciones</button>
                        </div>
                        <div className={style.comprar}>
                            <p>{snack.price}</p>
                            <div className={style.botton}>
                                <p>{snack.name}</p>
                                <button>+<span class="material-icons-round">shopping_cart</span></button>
                            </div>
                            <div className={style.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
                            </div>
                            <p>{snack.type.name}</p>
                        </div>
                        

                    </div>
                    </Link>
                ))

                }     
            </div>  
        </div>
    )
}