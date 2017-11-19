import React from 'react';
import './card.css';
import classNames from 'classnames';

const Card = ({ children, className: parentClassName, ...props }) => (
    <div className={classNames(['raised-2','card', parentClassName])} {...props}>
      { children }
    </div>
);
export default Card;