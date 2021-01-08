import * as types from '../contants';
const initialState = {
    data:{}
};

function configReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_COUNTRIES_LIST:
            return {
                ...state, data: action.data
            }
        default:
            return state;
    }
};

export default configReducer;