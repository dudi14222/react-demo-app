import { actionTypes } from '../actions/actions';
const INITIAL_STATE = {
    items: []    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {       
        case actionTypes.ORDER_HISTORY_FETCHED:            
            return { ...state, items: action.payload.items };       
        default:
            return state;
    }
};
