import axios from 'axios'

export const INGLES = 'INGLES'

export const cambiarIngles = () => async dispatch => {

    dispatch({
        type: INGLES,
        payload: "Cambiando a ingles"
    })
}