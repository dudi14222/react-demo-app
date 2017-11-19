import Section from '../Section';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('Section snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Section />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('Section shallow tests', () => {
    it('should render children when passed in', () => {
        const wrapper = shallow((
            <Section>
                <div className="unique" />
            </Section>
        ));    
        expect(wrapper.contains(<div className="unique" />)).toBe(true);
    });
})



