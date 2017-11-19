import { actionTypes } from '../actions/actions';
const INITIAL_STATE = {
    products: [],
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ITEMS_FETCHED:
            return { ...state, products: action.payload.items, isLoading: false };

        case actionTypes.ITEMS_FETCHED_START:
            return { ...state, isLoading: true };

        default:
            return state;
    }
};