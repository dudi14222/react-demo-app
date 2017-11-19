
import {actionTypes, addItem, removeItem} from './actions';

describe('actions tests', () => {    
    it('add item action return correct type', () => {
        let item = {id: 1, name: 'item 1'};
        expect(addItem(item)).toEqual({
            type: actionTypes.ADD_ITEM,
            payload: {item: item}
        })
    })

    it('remove item action return correct type', () => {
        expect(removeItem(1)).toEqual({
            type: actionTypes.REMOVE_ITEM,
            payload: {id: 1}
        })
    })
})