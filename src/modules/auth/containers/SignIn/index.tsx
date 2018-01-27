import SignInForm, { ISignInFormValuesProps } from '../../components/SignInForm'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const MERCHANT_SIGN_IN_WITH_EMAIL = gql`
mutation ($email: String, $password: String){
  merchantSignInWithEmail(email: $email, password: $password) {
    user {
      id
      type
      email
    }
    token
  }
}
`

const storeToken = (token: string) => {
  return localStorage.setItem('token', token)
}

export default graphql(MERCHANT_SIGN_IN_WITH_EMAIL, {
  props: ({ mutate }) => ({
    merchantSignInWithEmail: async ({email, password}: ISignInFormValuesProps) => {
      try {
        const response = await mutate({
          variables: {
            email,
            password,
          },
        })
        await storeToken(response.data.merchantSignInWithEmail.token)
        console.log(response)
      } catch (err) {
        alert(err.toString())
      }
    },
  }),
})(SignInForm)
