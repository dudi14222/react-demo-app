import Heading from '../Heading';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('Heading snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Heading />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('Heading shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <Heading>
                <div className="unique" />
            </Heading>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
})



