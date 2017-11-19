import Body from '../Body';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";


describe('Body snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Body />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('Body shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <Body>
                <div className="unique" />
            </Body>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
})



