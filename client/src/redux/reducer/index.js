import { 
  INGLES,
  GET_PRODUCTS,
  GET_TIPOS,
  POST_PRODUCTS,
  SET_MENSAJE,
  PAGADO,
  ADD_TO_CAR,
  DELETE_FROM_CAR,
  GET_BY_ID,
  LOG_IN,
  RESET
} from '../actions/index';

const inicialState = { 
    idioma: "español",
    productos: [],
    tipos: [],
    mensaje: '',
    infocompra: '',
    carrito: [],
    login: [],
    detail: []
};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case GET_BY_ID:
            return {
                ...state,
                detail: action.payload
            }

        case RESET:
                return {
                    ...state,
                    detail: []
                }

        case DELETE_FROM_CAR:
            return {
                ...state,
                carrito: state.carrito.filter(c => c._id !== action.payload)
            }

        case ADD_TO_CAR:
            return{
                ...state,
                carrito: !state.carrito.find(c=> c.name === action.payload.name)?
                    [...state.carrito, action.payload]:
                    state.carrito.map(c=> c.name === action.payload.name?
                        {...c, cantidad: c.cantidad + 1}:
                        c
                    )
            } 
            

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

        case LOG_IN:
                return {
                    ...state,
                    login: action.payload
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