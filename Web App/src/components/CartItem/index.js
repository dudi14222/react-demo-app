import React from 'react';
import './cartItem.css';
const CartItem = ({name, id, price, quantity, removeItem, imageUrl, isCartClosed}) => (
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><img className="cart-item-image" src={imageUrl}/> </td>
        {
            isCartClosed ? ''
            :
            <td className="td-remove" onClick={() => removeItem(id)}><label className="lbl-remove-item glyphicon glyphicon-remove"></label><button type="button" className="btn btn-primary btn-remove-item">Remove</button></td>                
        }        
    </tr>    
);
export default CartItem;
