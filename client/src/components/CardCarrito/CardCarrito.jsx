import React from 'react'
import style from '../CardCarrito/CardCarrito.module.css'
import { deleteFromCar } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const CardCarrito = ({name, price, image, id, cantidad}) => {

    const dispatch = useDispatch();
    console.log(cantidad, 'Componente cardCarrito')

  return (
    <div className={style.globalCont}>
        <div onClick={() => {dispatch(deleteFromCar(id))}} className={style.delete}>
            <span class="material-icons">
                clear
            </span>
            <div className={style.fondoCircular}>

            </div>
        </div>
        <div className={style.contImage}>
            <img src={image} alt='Not Found' />
        </div>
        <div className={style.name}>
            <p>{name}</p>
        </div>
        <div className={style.name}>
            <p>{cantidad}</p>
        </div>
        <div className={style.price}>
            <p>$ {price}</p>
        </div>
    </div>
  )
}

export default CardCarrito