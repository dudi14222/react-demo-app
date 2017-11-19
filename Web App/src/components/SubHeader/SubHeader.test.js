import SubHeader from '../SubHeader';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('SubHeader snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <SubHeader />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('SubHeader shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <SubHeader>
                <div className="unique" />
            </SubHeader>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
})



