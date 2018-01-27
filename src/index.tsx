import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { newApolloClient } from './system/apollo-client'
import { newSocketClient } from './system/socket-client'
import { newConfig, Env } from './system/config'

const env = process.env.NODE === 'development' ? Env.DEV : Env.PROD

const config = newConfig(env)
const apolloClient = newApolloClient(config)
const socketClient = newSocketClient(config)

ReactDOM.render(
  <AppContainer>
    <App apolloClient={apolloClient} socketClient={socketClient} />
  </AppContainer>,
  document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp apolloClient={apolloClient} socketClient={socketClient}/>
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
