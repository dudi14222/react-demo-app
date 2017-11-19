import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs,
  text
} from '@kadira/storybook-addon-knobs';

import ProductCard from './';

const storiesProductCard = storiesOf('ProductCard', module);
storiesProductCard.addDecorator(withKnobs);

storiesProductCard.addWithInfo('with some props and children', '', () => {
  const story =  <ProductCard
  className="product-card" 
  style={{height: '480px',  backgroundImage: `url(${text('image url', 'https://www.lamborghini.com/en-en/sites/en-en/files/DAM/lamborghini/news/hightlight.jpg')})` }}
    >
    <p className="product-title">{text('title', 'title1')}</p>
  </ProductCard>;
 
  return story;
});


