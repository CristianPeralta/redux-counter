import {
    STORE_RESULT,
    DELETE_RESULT,
} from './actionTypes';

const saveResult = (res) => {
    return {    
        type: STORE_RESULT,
        result: res,
    };
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log('oldCounter', oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    };
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id,
    };
};