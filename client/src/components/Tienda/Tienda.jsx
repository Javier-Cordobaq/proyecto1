import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Slider from '@mui/material/Slider';
import style from '../Tienda/Tienda.module.css'
import TextField from '@mui/material/TextField';
import ProductosTienda from '../ProductosTienda/ProductosTienda';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions';

const Tienda = () => {

  const dispatch = useDispatch();

  const idioma = useSelector(state => state.idioma)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const productos = useSelector(state => state.productos)

  const [state, setState] = useState('')
  const [error, setError] = useState(false)
  const [mensajeerror, setMensajeError] = useState('')
  const [slider, setSlider] = useState(0)
  const [filtrar, setFiltrar] = useState([])

  const valuetext = (value) => {
    setSlider(value)
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

  const handleTipos = (nombre) => {
    setState(nombre)
    setFiltrar(productos.filter((c) => {
      return (c?.type.name.toLocaleLowerCase() === nombre.toLocaleLowerCase())
  }))
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

      setFiltrar(productos.filter((c) => {
        return ( c?.name?.toLocaleLowerCase().includes(state.toLocaleLowerCase()) || c?.type.name.toLocaleLowerCase().includes(state.toLocaleLowerCase())
        )
    }))
  }

  const handlePrice = (e) => {
    e.preventDefault()
    setFiltrar(productos.filter((c) => {
      return c.price <= slider 
  }))
  }

  return (
  <div>

      <Nav/>
      <div className={style.globalContainer}>
        <div className={style.containerSticky}>
        <div className={style.filtros}>

          <div className={style.buscarInput}>
            <h2>{idioma === "espa??ol" ? "Buscar" : "Search"}</h2>
            <form onSubmit={handleSumbit}>
            <TextField
              error={error}
              id="outlined-error-helper-text"
              label="Buscar Productos"
              defaultValue=""
              helperText={mensajeerror}
              onChange={(e) => handleChange(e.target.value)}
              fullWidth
            />
            </form>
          </div>

            <form onSubmit={handlePrice} className={style.contxPrecio}>
              <h2>{idioma === "espa??ol" ? "Filtrar por precio" : "Filter by price"}</h2>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={20}
                  />
                <div className={style.precioBoton}>
                  <p>{idioma === "espa??ol" ? "PRECIO $0 - " : "PRICE $0 - "} ${slider}</p>
                  <button>{idioma === "espa??ol" ? "Filtrar" : "Filter"}</button>
                </div>
            </form>

          <div className={style.categorias}>
            <h2>{idioma === "espa??ol" ? "Categorias" : "Categories"}</h2>
            <div>
                  <h3 onClick={()=> handleTipos('MERCHANDISING')} className={`${state === 'MERCHANDISING'  ? style.check_sskill  : style.uncheck_sskill }`}>MERCHANDISING</h3>
            </div>
            
            <div>
                  <h3 onClick={() => handleTipos('STICKER')} className={`${state === 'STICKER' ? style.check_sskill  : style.uncheck_sskill }`}>STICKER</h3>
            </div>

            <div>
                  <h3 onClick={()=> handleTipos('SNACKS')} className={`${state === 'SNACKS' ? style.check_sskill  : style.uncheck_sskill }`}>SNACKS</h3>
            </div>

            <div>
                  <h3 onClick={()=> handleTipos('')} className={`${state === '' ? style.check_sskill  : style.uncheck_sskill }`}>TODOS</h3>
            </div>
          </div>

          </div>
        </div>

        <div className={style.productos}>
          <ProductosTienda filtrar={filtrar} productos={productos}/>
        </div>
      </div>

  </div>
  )
}

export default Tienda