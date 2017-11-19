import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import T from 'i18n-react';
import SocialLinks from '../SocialLinks'



const navigationLinks = [
    {
        name: {key: 'Home'},
        path: '/'
    },
    {
        name: {key: 'About'},
        path: '/about'
    },
    {
        name: {key: 'Products'},
        path: '/products'
    },
    {
        name: {key: 'Contact'},
        path: '/contact'
    },
    {
        name: {key: 'LogIn'},
        path: '/login'
    },
    {
        name: {key: 'My Order'},
        path: '/my-order'
    }
]

const updateNavLinks = function(linkObj){
    navigationLinks[4].name = linkObj.name;
    navigationLinks[4].path = linkObj.path;
}

const Menu = ({ headerButton, children, menuConfig: { menuState, open, switchLanguage } }) => (
    
    <div className="App-menubar">
        <label className="hamburger-icon fa fa-bars" onClick={() => open()} />
        <div className={`col-md-2 sidenav text-center ${(menuState ? '' : 'closed')}`}>
            <div className="parent-side-SideBar">
                <div className="row">
                    <div className="logo-brand">
                        <img className="logo" src="/images/logo.jpg" style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>

                <ul className="nav nav-pills nav-stacked">
                    {updateNavLinks(headerButton)}
                    {navigationLinks.map(({ name, path }, index) => (
                        <li key={`page-${name.key}-${index}`}>
                            <Link to={`${path}`} className="page-link">
                                <T.span text={{ ...name }}/>                                
                            </Link>
                        </li>
                    ))}
                    <li><T.button text={{key: "SwitchLanguage"}} type="button" className="btn-change btn btn-primary" onClick={() => switchLanguage()}></T.button></li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    </div>
)

export default Menu;