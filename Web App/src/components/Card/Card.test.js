import Card from '../Card';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('Card snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Card />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('Card shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <Card>
                <div className="unique" />
            </Card>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
})



