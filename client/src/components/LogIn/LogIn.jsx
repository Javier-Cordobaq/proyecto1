import React, { useState } from 'react'
import style from '../LogIn/LogIn.module.css'
import Logo from '../../Imagenes/LogoRangers.png'
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';

const LogIn = () => {

    const [state, setState] = useState({
        usuario: '',
        password: ''
    })

    const numeros = /^[A-Za-z]/;

    const [error, setError] = useState(false)
    const [mensaje, setMensaje] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
        if(state.usuario.match(numeros)){
          console.log('Ta bienm')
          setError(false)
        } else {
            setError(true)
            setMensaje('Solo puedes ingresar letras')
        }
    } 
    
    const handleSumbit = (e) => {
        e.preventDefault();
        /* dispatch(postProducts(state)) */
    }

  return (
    <div className={style.globalContainer}>
        <div className={style.contCentrado}>
            <div className={style.contImage}>
                <img src={Logo} alt='Not Found'/>
            </div>
            <form onSubmit={handleSumbit} className={style.contenedorInputs}>
                <div className={style.materialContainer}>
                    <TextField
                    error={error}
                    id="outlined-error-helper-text"
                    label="Usuario"
                    defaultValue="Hello World"
                    helperText={`${error === true ? mensaje : 'Nombre de usuario'}`}
                    variant="outlined"
                    name='usuario'
                    value={state.usuario}
                    onChange={handleChange}
                    fullWidth
                    />
                </div>
                <div className={style.materialContainer}>
                    <TextField
                    error={false}
                    id="outlined-error-helper-text"
                    label="Password"
                    defaultValue="Hello World"
                    helperText="Contraseña"
                    variant="outlined"
                    type='password'
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    fullWidth
                    />
                </div>
                <button>Acceder</button>
            </form>
            
        </div>
    </div>
  )
}

export default LogIn