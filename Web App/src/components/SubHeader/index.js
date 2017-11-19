import React from 'react';
import './subHeader.css';
const SubHeader = ({children}) => (
    <div className="sub-header"> 
        <h1>{children}</h1>        
    </div>
);

export default SubHeader;
