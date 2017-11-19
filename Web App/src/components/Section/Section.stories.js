import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs,
  text
} from '@kadira/storybook-addon-knobs';

import Section from './'


const storiesSection = storiesOf('Section', module);
storiesSection.addDecorator(withKnobs);

storiesSection.addWithInfo('with some props and children', '', () => {
  const story = <Section
  cName={text('class name', 'some-class-name')}
  >
  <p3>children</p3>
  </Section>;
  return story;
});


