import CartItem from '../CartItem';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('CartItem snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <CartItem />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('CartItem shallow tests', () => {
    it('should call remove item when clicking on remove', () => {
        let counter = 0;
        const prop = {name: 'n', id: 5, price: '1$', quantity: '3', imageUrl: ''
        ,removeItem: (id)=>(counter = counter + id)
        }
        const wrapper = shallow((
            <CartItem {...prop}/>
        )); 

        const button = wrapper.find(".td-remove");
        button.simulate('click');   
        expect(counter).toBe(5); 
    });
})



