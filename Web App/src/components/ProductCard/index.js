import React from 'react';

const ProductCard = ({ children, ...props }) => (
    <div className="col-md-3 col-sm-3">
        <div className="thumbnail" {...props}>
            {children}
        </div>
    </div>
)

export default ProductCard;
