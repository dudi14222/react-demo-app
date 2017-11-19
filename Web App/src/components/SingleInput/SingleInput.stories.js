import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  withKnobs,
  boolean
} from '@kadira/storybook-addon-knobs';

import SingleInput from './';


const storiesSingleInput = storiesOf('SingleInput', module);
storiesSingleInput.addDecorator(withKnobs);

storiesSingleInput.addWithInfo('with some props', '', () => {
  const story = <SingleInput
    inputType={'text'}
    controlFunc={action('changed')}
    placeholder={'placeholder'}
    className={'className'}
    id={'id'}
    disabled={boolean('Disabled', false)}
  />;
  return story;
});
