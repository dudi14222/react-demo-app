import React from 'react';
import Menu from '../Menu';
import './header.css';
import { Link } from 'react-router-dom';
import T from 'i18n-react';

const Header = ({ children, menuConfig, headerButton, showHeaderButton, userName }) => (
    <header className="App-header">
        {
            userName ?
                <span className="user-name">{userName}</span>:
                ''        
        }
        
        {showHeaderButton ?
            <Link to={headerButton.path}>
                <T.button text={{ ...headerButton.name }} type="button" className="btn-change btn btn-primary float-right cart-login-button"></T.button>
            </Link>
            :
            ''
        }

        <Menu menuConfig={menuConfig} headerButton={headerButton} />

        <div className="App-subheader">{children}</div>
    </header>
)

export default Header;