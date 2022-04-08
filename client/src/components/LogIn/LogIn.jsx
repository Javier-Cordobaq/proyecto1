import React from 'react'
import style from '../LogIn/LogIn.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import FormControl from '@material-ui/core/FormControl';

const LogIn = () => {
  return (
    <div className={style.globalContainer}>
        <div>
            <div>
                <img src={Logo} alt='Not Found'/>
            </div>
            <form className={style.contenedorInputs}>
                <input
                type='text'
                placeholder='Usuario'
                />
                <input
                type='text'
                placeholder='Contraseña'
                />
            </form>
            
        </div>
    </div>
  )
}

export default LogIn