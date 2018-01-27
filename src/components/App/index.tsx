import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import SignIn from '../../modules/auth/containers/SignIn'
import SocketProvider from '../../modules/socket/providers/socket-provider';

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
          <SignIn />
        </SocketProvider>
      </ApolloProvider>

    )
  }
}

// onSubmit={(values) => alert(JSON.stringify(values))}
//           validate={(values) => {
//             const errors: any = {}
//             if (!values.email) {
//               errors.email = 'E-mail is required'
//             }
//             if (!values.password) {
//               errors.password = 'Password is required'
//             }
//             return errors
//           }}
