import axios from 'axios'

export const INGLES = 'INGLES'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const POST_PRODUCTS = 'POST_PRODUCTS'
export const POST_USUARIOS = 'POST_PRODUCTS'
export const GET_TIPOS = 'GET_TIPOS'
export const SET_MENSAJE = 'SET_MENSAJE'
export const PAGADO = 'PAGADO'

export const cambiarIngles = () => async dispatch => {

    dispatch({
        type: INGLES,
        payload: "Cambiando a ingles"
    })
}

export const getProducts = () => async dispatch => {

    const json = await axios.get(`http://localhost:3001/productos`)

    return dispatch({
        type: GET_PRODUCTS,
        payload: json.data
    })

}

export const pagado = () => async dispatch => {

    const json = await axios.post(`http://localhost:3001/Paypal/create-order`)

    return dispatch({
        type: PAGADO,
        payload: json.data
    })

}

export const postProducts = (producto) => async dispatch => {

    const json = await axios.post(`http://localhost:3001/productos`, producto)

    return dispatch({
        type: POST_PRODUCTS,
        payload: json.data
    })

}

export const setMensaje = () => async dispatch => {

    return dispatch({
        type: SET_MENSAJE,
        payload: 'Seteando mensaje'
    })

}


export const getTipos = () => async dispatch => {

    const json = await axios.get(`http://localhost:3001/tipos`)

    return dispatch({
        type: GET_TIPOS,
        payload: json.data
    })

}

export const postUsuarios = (info) => async dispatch => {

    const json = await axios.post(`http://localhost:3001/usuarios`, info)

    return dispatch({
        type: POST_USUARIOS,
        payload: json.data
    })

}
