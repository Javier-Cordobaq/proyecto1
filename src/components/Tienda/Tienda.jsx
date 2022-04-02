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

  const [state, setState] = useState('')

  const arrayPro = arraySnacks.concat(rings)
  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (nombre) => {
    setState(nombre)

  }

  return (
    <div className={style.globalContainer}>
      {/* <Nav/> */}
      <div className={style.filtros}>
        <h1>Buscar</h1>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Buscar Productos"
          defaultValue="Buscar Productos"
          helperText="Solo puedes ingresar numeros."
        />
        <h1>Filtrar por precio</h1>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={10}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={20}
          />
        </Box>
        <div className={style.categorias}>
          <h1>Categorias</h1>
          <div>
                <h3 onClick={()=>handleChange('MERCHANDISING')} className={`${state === 'MERCHANDISING' ? style.uncheck_sskill : style.check_sskill }`}>MERCHANDISING</h3>
          </div>
          
          <div>
                <h3 onClick={()=>handleChange('STICKER')} className={`${state === 'STICKER' ? style.uncheck_sskill : style.check_sskill }`}>STICKER</h3>
          </div>

          <div>
                <h3 onClick={()=>handleChange('SNACKS')} className={`${state === 'SNACKS' ? style.uncheck_sskill : style.check_sskill }`}>SNACKS</h3>
          </div>
        </div>
        <h1>Etiquetas del producto</h1>
      </div>

      <div className={style.productos}>
        <ProductosTienda productos={arrayPro}/>
      </div>
    </div>
  )
}

export default Tienda