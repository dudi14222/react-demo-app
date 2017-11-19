import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  withKnobs,
  text, boolean, number, object,
} from '@kadira/storybook-addon-knobs';
import CartItem from './';


const storiesCartItem = storiesOf('CartItem', module);
storiesCartItem.addDecorator(withKnobs);

storiesCartItem.addWithInfo('with some props', '', () => {
  const story =
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

            <CartItem
              name={text('name', 'name1')}
              id={number('item id', 1)}
              price={text('price', '$20')}
              quantity={number('quantity', 6)}
              removeItem={action('clicked')}
              imageUrl={text('image url', '/images/passo-tonale.jpg')}
            />           

          </tbody>
        </table>
      </div>
    </div>

  return story;
});











