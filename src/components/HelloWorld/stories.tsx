import * as React from 'react'
import { storiesOf } from '@storybook/react';
import { HelloWorld } from './index';

storiesOf('HelloWorld', module)
  .add('with beautiful name', () => (
    <HelloWorld
      name='Rafael'
    />
  ))
  .add('with no name', () => (
    <HelloWorld
      name=''
    />
  ))
