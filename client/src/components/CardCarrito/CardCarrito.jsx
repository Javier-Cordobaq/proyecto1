import React from 'react'
import style from '../CardCarrito/CardCarrito.module.css'
import { deleteFromCar } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const CardCarrito = ({name, price, image, _id, cantidad}) => {

    const dispatch = useDispatch();

  return (
    <div className={style.flex}>
            <div onClick={() => {dispatch(deleteFromCar(_id))}} className={style.delete}>
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
                <p>x {cantidad}</p>
            </div>
            <div className={style.price}>
                <p>$ {(price * cantidad).toFixed(2)}</p>
            </div>
    </div>
  )
}

export default CardCarrito