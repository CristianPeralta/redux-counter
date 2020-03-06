import {
    INCREMENT,
    DECREMENT,
    ADD,
    SUBTRACT,
} from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return updateObject(state, { counter: state.counter + 1 });
        case DECREMENT:
            return updateObject(state, { counter: state.counter - 1 });
        case ADD:
            return updateObject(state, { counter: state.counter + action.val });
        case SUBTRACT:{
            return updateObject(state, { counter: state.counter - action.val });
        }
    }
    return state;
};

export default reducer;