import { 
  INGLES,
  GET_PRODUCTS,
  GET_TIPOS,
  POST_PRODUCTS,
  SET_MENSAJE,
  PAGADO
} from '../actions/index';

const inicialState = { 
    idioma: "español",
    productos: [],
    tipos: [],
    mensaje: '',
    infocompra: ''
};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case PAGADO:
            return {
                ...state,
                infocompra: action.payload
            }

        case POST_PRODUCTS:
            return {
                ...state,
                mensaje: action.payload
            }

        case SET_MENSAJE:
                return {
                ...state,
                mensaje: ''
            }

        case INGLES:
            return {
                ...state,
                idioma: state.idioma === 'español' ? 'ingles' : 'español'
            }
        case GET_PRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        case GET_TIPOS:
            return {
                ...state,
                tipos: action.payload
            }


        default:
        return state

    }
}

export default rootReducer;