import * as React from 'react';

export interface IHelloWorldProps {
  name: string
}

export const HelloWorld: React.SFC<IHelloWorldProps> = ({
  name,
}) => (
  <h1>
    Hello heheheh! {name}!
  </h1>
)
