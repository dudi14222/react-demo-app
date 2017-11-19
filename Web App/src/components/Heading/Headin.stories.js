import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  withKnobs,
  boolean, number,text
} from '@kadira/storybook-addon-knobs';

import Heading from './';


const stories = storiesOf('Heading', module);
stories.addDecorator(withKnobs);

stories.addWithInfo('with some props', '', () => {
  const story = <Heading
        className={text('class', 'section')}
        size={number('size', 2)}


    >
        <div>children</div>
  </Heading>;
  return story;
});
