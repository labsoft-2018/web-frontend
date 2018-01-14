import * as React from 'react'
import { HelloWorld } from './'
import * as renderer from 'react-test-renderer'

test('HelloWorld', () => {
  const component = renderer.create(
    <HelloWorld name='Rafael' />,
  )

  expect(component.toJSON()).toMatchSnapshot()
})
