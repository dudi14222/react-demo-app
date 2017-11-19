import React from 'react';
import {
    CartItem,        
} from '../';
const ItemsTable = ({ items, removeItem, isCartClosed }) => (
    <div className="container">

        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items.map((item) => {
                            return <CartItem key={item.id} {...item} removeItem={removeItem} isCartClosed={isCartClosed} />
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>
);
export default ItemsTable;
