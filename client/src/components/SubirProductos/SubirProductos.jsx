import React, { useState, useEffect } from 'react'
import styles from '../SubirProductos/SubirProductos.module.css'
import TextField from '@mui/material/TextField';
import { getTipos, postProducts, setMensaje } from '../../redux/actions'; 
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

/* Imports Material UI */

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

  const [image2, setImage2] = useState("");
  const [loading2, setLoading2] = useState(false);

  const uploadImageNutricional = async (e) => {
    const files2 = e.target.files;
    const data2 = new FormData();
    data2.append("file", files2[0]);
    data2.append("upload_preset", "tguasevk");
    setLoading2(true);
    const res2 = await fetch(
      "https://api.cloudinary.com/v1_1/rangerenterprise/image/upload",
      {
        method: "POST",
        body: data2,
      }
    );
    const file2 = await res2.json();
    setState({
      ...state,
      nutricional: file2.secure_url,
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
    image: '',
    nutricional: '',
    detalle: '',
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

const tipo = tipos.filter((c) => {
  return ( c?._id?.includes(state.type) )
})

  return (
    <div className={styles.contformulario}>

        <form onSubmit={handleSumbit} className={styles.contCentrado}>

            <div className={styles.inputs}>

            <h2>Información del producto</h2>

                <div className={styles.nombre}>
                  <div className={styles.uno}>
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
                  <div className={styles.dos}>
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
                </div>

                <div className={styles.prueba}>
                    <TextField
                    error={errores.erro}
                    id="outlined-error-helper-text"
                    label="Descripción"
                    defaultValue=""
                    type='text'
                    multiline
                    minRows={3}
                    maxRows={3}
                    value={state.detalle}
                    name='detalle'
                    helperText={errores.mensaje}
                    onChange={handleChange}
                    fullWidth
                    />
                </div>

                <div className={styles.prueba}>

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

                </div>

                 <div className={styles.prueba}>
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

                     <div className={styles.prueba}>
                    <Button
                      variant="contained"
                      component="label"
                      fullWidth
                       >
                      Tabla nutricional
                      <input
                        type="file"
                        name="file"
                        onChange={uploadImageNutricional}
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
                        <div className={`${state.image === '' ? styles.ImagenVacio : styles.img}`}>
                            <img src={state.image} alt=""/>
                            <button className={`${state.image === '' ? styles.hidden : styles.mor}`}>Seleccionar opciones</button>
                        </div> 
                        <div className={styles.comprar}>
                            <p className={styles.tipo}>{tipo.length !== 0 ? tipo[0].name : null}</p>
                            <div className={styles.botton}>
                                <p>{state.name}</p>
                                <button><span class="material-icons-round">add_shopping_cart</span>Agregar</button> 
                            </div>
                            <p className={styles.precio}>$ {state.price}</p>
                        </div>
                    </div>                          

                </div>  


        </form>

    </div>
  )
}

export default SubirProductos