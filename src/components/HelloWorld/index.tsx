import * as React from 'react';

export interface IHelloWorldProps {
  name: string
}

export const HelloWorld: React.SFC<IHelloWorldProps> = ({
  name,
}) => (
  <h1>
    Hello! {name}!
  </h1>
)
