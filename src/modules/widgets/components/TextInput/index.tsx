import * as React from 'react'
import { Form, Input } from 'semantic-ui-react'

export const TextInput: React.SFC<{
  label: string;
  placeholder: string;
  input: any;
  meta: any;
}> = ({
  label,
  input,
  meta,
  ...props,
}) => (
  <Form.Field>
    <label>{label}</label>
    <Input iconPosition='left' {...input} {...props} error={!!(meta.touched && meta.error)} />
  </Form.Field>
)
