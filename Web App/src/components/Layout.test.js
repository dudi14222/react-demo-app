
import {Layout} from './Layout';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Header, Body, Menu } from './';
import { mount, shallow } from "enzyme";
import renderer from 'react-test-renderer';

global.window = {}
import localStorage from 'mock-local-storage'
window.localStorage = global.localStorage

describe('Layout outer tests', () => {

    let props;
    let mountedlayoutComponent;

    const layoutComponent = () => {
        if (!mountedlayoutComponent) {
            mountedlayoutComponent = mount(
                <MemoryRouter>
                    <Layout  />
                </MemoryRouter>
            );
        }
        return mountedlayoutComponent
    }

    beforeEach(() => {
        props = {};
        mountedlayoutComponent = undefined;
    });
    
    it('is Layout', () => {
        const LayoutComponent = <Layout />;
        expect(LayoutComponent.type).toBe(Layout)
    })

    it("always renders a div", () => {
        const div = layoutComponent().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    it("has Header", () => {
        expect(layoutComponent().find(Header).length).toBe(1)
    })
    
    it("has Body Component", () => {
        expect(layoutComponent().find(Body).length).toBeGreaterThan(0)
    })
    
    it('Layout triggers menu open when clicked on menu', () => {
        const hamburgerButton = layoutComponent().find(Menu).find('.hamburger-icon');
        hamburgerButton.simulate('click');        
        expect(layoutComponent().find(Menu).props().menuConfig.menuState).toBe(true);
        hamburgerButton.simulate('click');
        expect(layoutComponent().find(Menu).props().menuConfig.menuState).toBe(false);
    })

    
})

describe('Layout snapshot tests', () => {
    it('test snapshot', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})

describe('Layout shallow tests', () => {

    it(`Layout has menu state and it's false`, () => {
        const layout = shallow(<Layout />)
        expect(layout.state().menuState).toBe(false);
    })

    it(`Layout manages menu close on click`, () => {
        const layout = shallow(<Layout />)
        layout.state().menuState = true;
        expect(
            layout.simulate('click')
                .state()
                    .menuState
        ).toBe(false);
    })

})