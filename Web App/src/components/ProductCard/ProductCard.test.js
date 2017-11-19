import ProductCard from '../ProductCard';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('ProductCard snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <ProductCard />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('ProductCard shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <ProductCard>
                <div className="unique" />
            </ProductCard>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });

    it('should set the props on thumbnail', () => {
        const wrapper = shallow((
            <ProductCard p1={"test1"} />               
        ));            
        expect(wrapper.find(".thumbnail").prop("p1")).toBe("test1");
    });
})



