import { 
  INGLES
} from '../actions/index';

const inicialState = { 
    idioma: "español"
};

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {

        case INGLES:
            return {
                ...state,
                idioma: state.idioma === 'español' ? 'ingles' : 'español'
            }


        default:
        return state

    }
}

export default rootReducer;