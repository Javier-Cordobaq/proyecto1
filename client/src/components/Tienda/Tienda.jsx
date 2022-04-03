import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from '../Tienda/Tienda.module.css'
import TextField from '@mui/material/TextField';
import ProductosTienda from '../ProductosTienda/ProductosTienda';
import snack1 from '../../Imagenes/snack1.png'
import snack2 from '../../Imagenes/snack2.png'
import snack3 from '../../Imagenes/snack3.png'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Tienda = () => {
  
  const arraySnacks = [
    {
      img: snack1,
      nombre: 'Spicy Cheese',
    },
    {
      img: snack2,
      nombre: 'Sea Salt',
    },
    {
      img: snack3,
      nombre: 'Sweet & Salty',
    },
  ]

  const rings = [
    {
      img: snack1,
      nombre: 'White Cheddar',
    },
    {
      img: snack2,
      nombre: 'Caramel Churro',
    },
    {
      img: snack3,
      nombre: 'Sour cream & Onion',
    }
  ]

  const [state, setState] = useState()
  const [error, setError] = useState(false)
  const [mensajeerror, setMensajeError] = useState('')
  const [slider, setSlider] = useState(0)

  const arrayPro = arraySnacks.concat(rings)

  function valuetext(value) {
    return setSlider(value);
  }

  const valoresAceptados = /^[0-9]+$/;

  const handleSumbit = (e) => {
    e.preventDefault()
    if (state.match(valoresAceptados)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleChange = (nombre) => {
    if (nombre.match(valoresAceptados)) {
      setMensajeError('No puedes ingresar numeros')
      setError(true)
    } else {
      setMensajeError('')
      setError(false)
    }
    setState(nombre)
  }

  return (
  <div>

      <Nav/>
      <div className={style.globalContainer}>
        <div className={style.containerSticky}>
        <div className={style.filtros}>

          <div className={style.buscarInput}>
            <h2>Buscar</h2>
            <form onSubmit={handleSumbit}>
            <TextField
              error={error}
              id="outlined-error-helper-text"
              label="Buscar Productos"
              defaultValue="Buscar Productos"
              helperText={mensajeerror}
              onChange={(e) => handleChange(e.target.value)}
            />
            </form>
          </div>

            <div className={style.contxPrecio}>
              <h2>Filtrar por precio</h2>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={10}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={20}
                  />
                <div className={style.precioBoton}>
                  <p>{`PRECIO: $0 - $${slider}`}</p>
                  <button>Filtrar</button>
                </div>
            </div>

          <div className={style.categorias}>
            <h2>Categorias</h2>
            <div>
                  <h3 onClick={()=>handleChange('MERCHANDISING')} className={`${state === 'MERCHANDISING'  ? style.check_sskill  : style.uncheck_sskill }`}>MERCHANDISING</h3>
            </div>
            
            <div>
                  <h3 onClick={()=>handleChange('STICKER')} className={`${state === 'STICKER' ? style.check_sskill  : style.uncheck_sskill }`}>STICKER</h3>
            </div>

            <div>
                  <h3 onClick={()=>handleChange('SNACKS')} className={`${state === 'SNACKS' ? style.check_sskill  : style.uncheck_sskill }`}>SNACKS</h3>
            </div>
          </div>

          </div>
        </div>

        <div className={style.productos}>
          <ProductosTienda productos={arrayPro}/>
        </div>
      </div>

  </div>
  )
}

export default Tienda