import React, { useState, useEffect } from 'react'
import styles from '../SubirProductos/SubirProductos.module.css'
import TextField from '@mui/material/TextField';
import { getTipos, postProducts, setMensaje } from '../../redux/actions'; 
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

/* Imports Material UI */

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

const SubirProductos = () => {

/* Cloudinary */

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tguasevk");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/rangerenterprise/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setState({
      ...state,
      image: file.secure_url,
    });
    setLoading(false);
  };

  
  
/* ----------------------------------------------------- */

const tipos = useSelector(state => state.tipos)
const mensaje = useSelector(state => state.mensaje)

const [enviado, setEnviado] = useState(false)

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getTipos())
}, [])


useEffect(() => {
    if (mensaje !== '' && enviado === true) {
        Swal.fire({
            position: 'center',
            icon: mensaje === 'Producto guardado' ? 'success' : 'error',
            title: mensaje === '' ? 'Cargando' : mensaje,
          })
        dispatch(setMensaje())
        setEnviado(false)
    }
}, [mensaje, enviado])

  const [errores, setErrores] = useState({
      error: false,
      mensaje: ''
  })
  
  const [state, setState] = useState({
    type: '',     
    name: '',
    price: 0,
    image: ''
})

const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
} 

const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(postProducts(state))
    setState({name: '', type: '', price: 0, image: ''})
    setEnviado(true)
}

  return (
    <div className={styles.contformulario}>

        <form onSubmit={handleSumbit} className={styles.contCentrado}>

            <div className={styles.inputs}>

            <h2>Información del producto</h2>

                <div>
                    <TextField
                    error={errores.error}
                    id="outlined-error-helper-text"
                    label="Nombre"
                    defaultValue=""
                    value={state.name}
                    name='name'
                    helperText={errores.mensaje}
                    onChange={handleChange}
                    fullWidth
                    />
                </div>

                <div>
                    <TextField
                    error={errores.erro}
                    id="outlined-error-helper-text"
                    label="Precio"
                    defaultValue=""
                    type='number'
                    value={state.price}
                    name='price'
                    helperText={errores.mensaje}
                    onChange={handleChange}
                    fullWidth
                    />
                </div>

                <div className={styles.contSelect}>
                            
                  <FormControl variant="outlined" className={styles.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={state.type} 
                    name='type'
                    onChange={handleChange}
                    label="Tipo"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>Tipo</em>
                    </MenuItem>
                    {
                      tipos.length !== 0 ? tipos?.map(c => (
                            
                      <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                      ))
                      :
                      null
                                              
                    }
                  </Select>
                  </FormControl>

                </div>

                 <div>
                    <Button
                      variant="contained"
                      component="label"
                      fullWidth
                       >
                      Selecciona una imagen
                      <input
                        type="file"
                        name="file"
                        onChange={uploadImage}
                        hidden
                      />
                    </Button>
                  </div>                

                <div className={styles.botonSubir}>
                    <button>Subir</button>    
                </div>   

            </div>                     

                <div className={styles.imagen}>

                    <div className={styles.producto}>
                      <div className={`${state.image === '' ? styles.img : styles.imgSinfondo}`}>
                        <img src={state.image} alt=""/>
                      </div>
                        <div className={styles.comprar}>
                        <p>{state.type}</p>
                            <div className={styles.botton}>
                                <p>{state.name}</p>
                                <button>+<span class="material-icons-round">shopping_cart</span></button>
                            </div>
                            <div className={styles.tablanutriocional}>
                                        <p>Ver tabla nutricional + 1</p>
                            </div>
                            <p>{state.price}</p>
                      </div>
                        

                    </div>                       

                   {/*    {loading ? 
                        <h3>Cargando imagen...</h3>
                       : 
                        <img src={state.image} styles={{ width: "300px" }} />
                      } */}

                </div>  


        </form>

    </div>
  )
}

export default SubirProductos