import SocialLinks from '../SocialLinks';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";



describe('SocialLinks shallow tests', () => {

    it(`SocialLinks has facebook link`, () => {
        const socialLinks = shallow(<SocialLinks />)
        const fbLink = socialLinks.find('.icoFacebook'); 
        expect(fbLink.prop("href")).toBe("https://www.facebook.com/dudi.hamdi");    
    })

    it(`SocialLinks has Linkedin link`, () => {
        const socialLinks = shallow(<SocialLinks />)
        const linkedin = socialLinks.find('.icoLinkedin'); 
        expect(linkedin.prop("href")).toBe("https://www.linkedin.com/");    
    })

})

describe('SocialLinks snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <SocialLinks />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

