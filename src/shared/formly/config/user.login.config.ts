import { FormlyFieldConfig } from '@ngx-formly/core';
import { PasswordInputComponent } from '../component/password-input.component';
import { PrefixInputComponent } from '../component/prefix-input.component';
import { EmailValidator } from '../form-validators.util';

export const USER_LOGIN_FIELDS: FormlyFieldConfig[] = [
  {
    type: 'prefix-input',
    key: 'username',
    props: { placeholder: 'Email', required: true, type: 'email', prefixIcon: 'user' },
    validators: { validation: ['email'] }
  },
  {
    type: 'password-input',
    key: 'password',
    props: { placeholder: 'Password', required: true, type: 'password', prefixIcon: 'lock' }
  },
  {
    fieldGroupClassName: 'flex flex-col md:flex-row justify-between items-center gap-2',
    fieldGroup: [
      {
        className: 'w-full',
        key: 'rememberMe',
        type: 'checkbox',
        defaultValue: false,
        props: { type: 'checkbox', label: 'Remember Me' }
      },
    ],
  },
];

export const USER_LOGIN_CONFIG = {
  types: [
    { name: 'prefix-input', component: PrefixInputComponent, wrappers: ['form-field'] },
    { name: 'password-input', component: PasswordInputComponent, wrappers: ['form-field'] },
  ],
  validators: [
    { name: 'email', validation: EmailValidator }
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Not a valid email' }
  ]
};
