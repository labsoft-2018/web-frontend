import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import SocketProvider from '../../modules/socket/providers/socket-provider';
import Routes from '../../routes/Routes';

export interface IAppProps {
  apolloClient: any,
  socketClient: any
}
export default class App extends React.Component<IAppProps> {
  public render() {
    const {
      apolloClient,
      socketClient,
    } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <SocketProvider socket={socketClient}>
          <Routes />
        </SocketProvider>
      </ApolloProvider>

    )
  }
}
