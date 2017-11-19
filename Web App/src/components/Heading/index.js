import React from 'react';
import classNames from 'classnames';
import './headings.css';

const Heading = ({ size, children, className, ...props }) => 
    React.createElement(
        `h${size}`,{ 
            className: classNames([
                className, `heading heading-${size}`
            ]), ...props 
        } , children
    )
export default Heading;    