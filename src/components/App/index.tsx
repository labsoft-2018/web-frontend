import * as React from 'react'
import { HelloWorld } from '../HelloWorld/index';
import { SignInForm } from '../../modules/auth/components/SignInForm/index';

export default class App extends React.Component {
  public render() {
    return (
      <SignInForm
        onSubmit={(values) => alert(JSON.stringify(values))}
        validate={(values) => {
          const errors: any = {}
          if (!values.email) {
            errors.email = 'E-mail is required'
          }
          if (!values.password) {
            errors.password = 'Password is required'
          }
          return errors
        }}
      />
    )
  }
}
