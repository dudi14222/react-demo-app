import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  withKnobs
  
} from '@kadira/storybook-addon-knobs';

import Card from './'


const storiesCard = storiesOf('Card', module);
storiesCard.addDecorator(withKnobs);
storiesCard.addWithInfo('with children', '', () => {
  const story = <Card>
    <div>some text</div>
  </Card>;
  return story;
});

storiesCard.addWithInfo('with some props', '', () => {
  const story = <Card style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    onClick={action('clicked')}
  >
    Consectetur cillum enim cillum dolor cupidatat pariatur occaecat.
  </Card>;
  return story;
});
