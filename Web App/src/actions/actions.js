import authService from '../services/authenticationService';
import axios from 'axios'
export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    LOG_IN_START: 'LOG_IN_START',
    LOG_IN_FAIL: 'LOG_IN_FAIL',
    SAVE_CART_START: 'SAVE_CART_START',
    SAVE_CART_SUCCESS: 'SAVE_CART_SUCCESS',
    ORDER_HISTORY_FETCHED: 'ORDER_HISTORY_FETCHED',
    ITEMS_FETCHED: 'ITEMS_FETCHED',
    ITEMS_FETCHED_START: 'ITEMS_FETCHED_START'
}

const serverUrl = 'http://127.0.0.1:3001';

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    payload: { item: item }
})

export const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: { id: id }
})

export const logInUser = (email) => ({
    type: actionTypes.LOG_IN,
    payload: { email: email }
})

export const logIn = (email, password) => (dispatch) => {
    dispatch({
        type: actionTypes.LOG_IN_START
    })    

    let url = `${serverUrl}/login?email=${email}&pwd=${password}`;
    axios.get(url)
        .then(function (response) {
            console.log(response);
            console.log(response.data.isValid);
            if (response.data.isValid) {
                authService.authenticateUser(email, password);
                dispatch({
                    type: actionTypes.LOG_IN_SUCCESS,
                    payload: { email: email, userName: response.data.userName }
                })
            }
            else {
                dispatch({
                    type: actionTypes.LOG_IN_FAIL
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getOrderHistory = (email) => (dispatch) => {
    let url = `${serverUrl}/orderHistory?email=${email}`;
    axios.get(url)
        .then(function (response) {
            console.log('orderHistory: ' + response.data);
            console.log(response.data.isValid);
            dispatch({
                type: actionTypes.ORDER_HISTORY_FETCHED,
                payload: { items: response.data }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const getItems = () => (dispatch) => {
    dispatch({
        type: actionTypes.ITEMS_FETCHED_START        
    })
    let url = `${serverUrl}/items`;
    axios.get(url)
        .then(function (response) {
            console.log('items: ' + response.data);
            dispatch({
                type: actionTypes.ITEMS_FETCHED,
                payload: { items: response.data }
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const saveCart = (cartItems) => (dispatch) => {
    dispatch({
        type: actionTypes.SAVE_CART_START
    })

    let url = `${serverUrl}/savecart`;

    axios.post(url, cartItems)
        .then(function (response) {
            console.log(response);
            console.log(response.data.isValid);
            if (response.data.ok) {
                dispatch({
                    type: actionTypes.SAVE_CART_SUCCESS
                })
            }
            else {
                // dispatch({
                //     fail
                // })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}



