import * as React from 'react'
import { object } from 'prop-types'

export const withSocket = () => (WrappedComponent: any) => class extends React.Component {
  public static contextTypes = {
    socket: object,
  }
  public render() {
    return (
      <WrappedComponent
        socket={this.context.socket}
        {...this.props}
      />
    )
  }
}
