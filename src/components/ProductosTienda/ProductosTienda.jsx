import React from 'react'
import Logo from '../../Imagenes/LogoRangers.png'
import style from './ProductosTienda.module.css'

export default function ProductosTienda({productos}){
    return(
        <div className={style.container}>
            <div className={style.gridPro}> 
                {
                productos.map(snack => (

                    <div className={style.producto}>
                        <img className={style.img} src={snack.img} alt=""/>
                        <div className={style.comprar}>
                            <div className={style.botton}>
                                <p>{snack.nombre}</p>
                                <button>+<span class="material-icons-round">shopping_cart</span></button>
                            </div>
                            <div className={style.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
                            </div>
                        </div>
                        

                    </div>
                ))
            }     
            </div>  
        </div>
    )
}