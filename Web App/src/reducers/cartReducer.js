import { actionTypes } from '../actions/actions';
const INITIAL_STATE = {
    items: [],
    isLoading: false,
    orderSaved: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            let storeItem = { ...action.payload.item, quantity: 1 };
            for (let i in state.items) {
                if (state.items[i].id === storeItem.id) {
                    storeItem.quantity = state.items[i].quantity + 1;
                    let copyItems = [...state.items.slice(0, i), storeItem, ...state.items.slice(parseInt(i) + 1, state.items.length)];
                    return { ...state, items: copyItems, orderSaved: false };
                }
            }
            return { ...state, items: [...state.items, storeItem], orderSaved: false };
        case actionTypes.REMOVE_ITEM:
            let copyItems = [...state.items];
            for (let i in copyItems) {
                if (copyItems[i].id === action.payload.id) {
                    let q = copyItems[i].quantity;
                    if (q > 1) {
                        copyItems[i].quantity = q - 1;
                    }
                    else {
                        copyItems.splice(i, 1);
                    }
                    break;
                }
            }
            return { ...state, items: copyItems };

        case actionTypes.SAVE_CART_START:
            return { ...state, isLoading: true, orderSaved: false };

        case actionTypes.SAVE_CART_SUCCESS:
            return { ...state, isLoading: false, orderSaved: true, items: [] };        

        default:
            return state;
    }
};

export const getItemsSelector = (state) => {
    return state.cartReducer.items;
}

export const getIsloadinSelector = (state) => {
    return state.cartReducer.isLoading;
}
