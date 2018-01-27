import * as React from 'react'
import { object } from 'prop-types'

export interface ISocketProviderProps {
  socket: SocketIOClient.Socket
}

export default class SocketProvider extends React.Component<ISocketProviderProps> {
  public static childContextTypes = {
    socket: object,
  }
  public getChildContext() {
    return {
      socket: this.props.socket,
    }
  }
  public render() {
    return this.props.children
  }
}
