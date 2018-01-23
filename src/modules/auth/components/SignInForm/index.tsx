import * as React from 'react';
import styled from 'styled-components'
import { Button, Form } from 'semantic-ui-react'
import { Form as RFForm, Field as RFField } from 'react-final-form'
import { TextInput } from '../../../widgets/components/TextInput/index'

const LOGO_URL: string = 'https://i.pinimg.com/originals/06/68/99/066899986813f160faf1a641c4b429a1.png'

export interface ISignInFormProps {
  onSubmit: (values: any) => void;
  validate: (values: any) => object | null;
}

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
  padding-top: 20px;
  margin-top: 50px;
  flex-direction: column;
`

const Logo = styled.img`
  margin: 0px auto 10px auto;
  display: block;
`

const LogoName = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`

export const SignInForm: React.SFC<ISignInFormProps> = ({
  onSubmit,
  validate,
}) => (
  <Wrapper>
    <Logo src={LOGO_URL} alt='Logo' />
    <LogoName>
      Quack Pack
    </LogoName>
    <RFForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <Form onSubmit={handleSubmit}>
          <RFField
            name='email'
            component={TextInput}
            placeholder='example@example.com'
            icon='mail'
          />
          <RFField
            name='password'
            component={TextInput}
            placeholder='******'
            type='password'
            icon='lock'
          />
          <Button primary type='submit' disabled={invalid}>Login</Button>
        </Form>
      )}
    />
  </Wrapper>

)
