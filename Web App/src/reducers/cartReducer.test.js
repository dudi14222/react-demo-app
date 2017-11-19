import { actionTypes } from '../actions/actions';
import cartReducer from './cartReducer';
const TEST_INITIAL_STATE = {
    items: []
}

describe('cartReducer test', () => {
    it('should return proper initial value', () => {
        expect(cartReducer(undefined, {})).toEqual(TEST_INITIAL_STATE)
    })


    it('should add item', () => {
        expect(
            addItem(TEST_INITIAL_STATE)
        )
            .toEqual({
                items: [
                    {
                        "price": "$350",
                        "name": "Passo Tonale",
                        "shortDesc": "Some short and temp description",
                        "description": "On the border between Lombardy and Trentino, Passo Tonale is a natural amphitheatre that marks the border between the Val di Sole and Vallecamonica. It is open to the sun and boasts fantastic views, due to its altitude from 1884 m to 3100 m, between the Ortles-Cevedale and Adamello-Presanella mountain ranges.",
                        "imageUrl": "/images/passo-tonale.jpg",
                        "id": 2,
                        "quantity": 1
                    }
                ]
            })
    })

    it('should increment the quantity', () => {
        const state = addItem(TEST_INITIAL_STATE);
        expect(
            addItem(state)
        )
            .toEqual({
                items: [
                    {
                        "price": "$350",
                        "name": "Passo Tonale",
                        "shortDesc": "Some short and temp description",
                        "description": "On the border between Lombardy and Trentino, Passo Tonale is a natural amphitheatre that marks the border between the Val di Sole and Vallecamonica. It is open to the sun and boasts fantastic views, due to its altitude from 1884 m to 3100 m, between the Ortles-Cevedale and Adamello-Presanella mountain ranges.",
                        "imageUrl": "/images/passo-tonale.jpg",
                        "id": 2,
                        "quantity": 2
                    }
                ]
            })
    })


    it('should decrement the quantity', () => {
        let state = addItem(TEST_INITIAL_STATE);
        state = addItem(state);        
        expect(cartReducer(state, removeItem(2)))
            .toEqual({
                items: [
                    {
                        "price": "$350",
                        "name": "Passo Tonale",
                        "shortDesc": "Some short and temp description",
                        "description": "On the border between Lombardy and Trentino, Passo Tonale is a natural amphitheatre that marks the border between the Val di Sole and Vallecamonica. It is open to the sun and boasts fantastic views, due to its altitude from 1884 m to 3100 m, between the Ortles-Cevedale and Adamello-Presanella mountain ranges.",
                        "imageUrl": "/images/passo-tonale.jpg",
                        "id": 2,
                        "quantity": 1
                    }
                ]
            })
    })

    it('should remove the item', () => {
        let state = addItem(TEST_INITIAL_STATE);     
        expect(cartReducer(state, removeItem(2)))
            .toEqual({
                items: []                               
            })
    })

})

const addItem = (state) =>(
    cartReducer(state, {
        type: actionTypes.ADD_ITEM,
        payload: {
            item: {
                "price": "$350",
                "name": "Passo Tonale",
                "shortDesc": "Some short and temp description",
                "description": "On the border between Lombardy and Trentino, Passo Tonale is a natural amphitheatre that marks the border between the Val di Sole and Vallecamonica. It is open to the sun and boasts fantastic views, due to its altitude from 1884 m to 3100 m, between the Ortles-Cevedale and Adamello-Presanella mountain ranges.",
                "imageUrl": "/images/passo-tonale.jpg",
                "id": 2
            }
        }
    })
);

const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: { id: id }
})

