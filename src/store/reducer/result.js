import {
    STORE_RESULT,
    DELETE_RESULT,
} from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const filteredResults = state.results.filter(result => result.id !== action.id)
    return updateObject(state, { results: filteredResults });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT : return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
        case DELETE_RESULT : return deleteResult(state, action);
    }
    return state;
};

export default reducer;