import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pagado } from '../../redux/actions'
import Swal from 'sweetalert2'

const Carrito = () => {

const infocompra = useSelector(state => state.infocompra)
console.log(infocompra)

const dispath = useDispatch();

  return (
    <div>
        <button onClick={() => dispath(pagado())}>Comprar</button>
        <div>
            {infocompra !== '' ?
            Swal.fire({
            position: 'center',
            icon: 'success',
            title:'Cargando',
            footer: `<a href=${infocompra}>Ir a paypal</a>`
            })
            :
            null
            }
        </div>
        
    </div>
  )
}

export default Carrito