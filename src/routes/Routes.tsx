import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import PositionMapScreen from '../modules/orders/screens/index';
import SignInScreen from '../modules/auth/screens/SignIn/index';


const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={SignInScreen}/>
      <Route path='/orders' component={PositionMapScreen}/>
    </div>
  </Router>
)
export default Routes
