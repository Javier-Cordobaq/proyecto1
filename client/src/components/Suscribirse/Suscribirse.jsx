import React, { useState } from 'react'
import style from '../Suscribirse/Suscribirse.module.css'
import { postUsuarios } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

const Suscribirse = () => {

const dispatch = useDispatch()

const [state, setState] = useState({
    name: '',
    email: ''
})

const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
} 

const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postUsuarios(state))
    setState({name: '', email: ''})
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Te haz inscrito correctamente',
        showConfirmButton: false,
        timer: 1500
      })
}


  return (
    <div className={style.globalContainer}>
        <div className={style.contTexto}>
            <div className={style.textos}>
                <h1>Inscribete en el Newsletter</h1>
                <p>Y recibimos del Ranger y Bruss directo a tu e-mail</p>
            </div>
            <form onSubmit={handleSumbit} className={style.inputs}>

                <input 
                placeholder='Nombre' 
                type="text" 
                value={state.name}
                name='name'
                onChange={handleChange}
                />

                <input 
                placeholder='E-mail' 
                type="text" 
                value={state.email}
                name='email'
                onChange={handleChange}
                />

                <button className={style.botonHeader}>Suscribirse <span class="material-icons-two-tone">arrow_forward</span></button>
            </form>
        </div>

        <div className={style.paquetes}>

        </div>
    </div>
  )
}

export default Suscribirse