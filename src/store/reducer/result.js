import {
    STORE_RESULT,
    DELETE_RESULT,
} from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:{
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result }),
            };
        }
        case DELETE_RESULT:{
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.id),
            };
        }
    }
    return state;
};

export default reducer;