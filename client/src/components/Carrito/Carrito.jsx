import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pagado } from '../../redux/actions'
import Swal from 'sweetalert2'
import style from '../Carrito/Carrito.module.css'

const Carrito = () => {

const infocompra = useSelector(state => state.infocompra)

const dispath = useDispatch();

  return (
    <div className={style.contGlobal}>
        <button onClick={() => dispath(pagado())}>Comprar</button>
        <div>
            {infocompra !== '' ?
            Swal.fire({
              position: 'center',
              icon: 'success',
              title:'Genial, empezemos con tu proceso de compra',
              footer: `<a href=${infocompra}>Ir a paypal</a>`,
              showConfirmButton: false,
              })
            :
            null
            }
        </div>
        
    </div>
  )
}

export default Carrito