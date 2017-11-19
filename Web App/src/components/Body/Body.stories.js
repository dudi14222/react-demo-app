import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs
} from '@kadira/storybook-addon-knobs';

import Body from './';

const storiesBody = storiesOf('Body', module);
storiesBody.addDecorator(withKnobs);
storiesBody.addWithInfo('with children', '', () => {
  const story = <Body >
    <label>label</label>
  </Body>;
  return story;
});

