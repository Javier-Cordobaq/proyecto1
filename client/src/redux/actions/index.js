import axios from 'axios'

export const INGLES = 'INGLES'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const POST_PRODUCTS = 'POST_PRODUCTS'
export const POST_USUARIOS = 'POST_PRODUCTS'
export const GET_TIPOS = 'GET_TIPOS'
export const SET_MENSAJE = 'SET_MENSAJE'
export const PAGADO = 'PAGADO'
export const ADD_TO_CAR = 'ADD_TO_CAR'
export const DELETE_FROM_CAR = 'DELETE_FROM_CAR'
export const GET_BY_ID = 'GET_BY_ID'
export const LOG_IN = 'LOG_IN'
export const RESET = 'RESET'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const addToCar = (producto) => async dispatch => {

    dispatch({
        type: ADD_TO_CAR,
        payload: producto
    })
}
export const getAllUsers = ()=> async dispatch =>{
    const res = await axios.get('/Usuarios')
    dispatch({
        type: GET_ALL_USERS,
        payload: res.data
    })
}

export const deleteFromCar = (producto) => async dispatch => {

    dispatch({
        type: DELETE_FROM_CAR,
        payload: producto
    })
}

export const cambiarIngles = () => async dispatch => {

    dispatch({
        type: INGLES,
        payload: "Cambiando a ingles"
    })
}

export const getProducts = () => async dispatch => {

    const json = await axios.get(`/productos`)

    return dispatch({
        type: GET_PRODUCTS,
        payload: json.data
    })

}

export const getById = (_id) => async dispatch => {

    const json = await axios.get(`/productos/${_id}`)

    return dispatch({
        type: GET_BY_ID,
        payload: json.data
    })

}

export const pagado = (orden) => async dispatch => {

    const json = await axios.post(`/Paypal/create-order`, orden)

    return dispatch({
        type: PAGADO,
        payload: json.data
    })

}

export const reset = () => dispatch => {
    return dispatch({
      type: RESET
    })
  }

export const logIn = (usuario) => async dispatch => {

    const json = await axios.post(`/admin`, usuario)

    return dispatch({
        type: LOG_IN,
        payload: json.data
    })

}

export const postProducts = (producto) => async dispatch => {

    const json = await axios.post(`/productos`, producto)

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

    const json = await axios.get(`/tipos`)

    return dispatch({
        type: GET_TIPOS,
        payload: json.data
    })

}

export const postUsuarios = (info) => async dispatch => {

    const json = await axios.post(`/usuarios`, info)

    return dispatch({
        type: POST_USUARIOS,
        payload: json.data
    })

}
