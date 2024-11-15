import { FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicTemplateComponent } from '../component/dynamic-template.component';
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
      {
        className: 'w-full mb-9 text-right',
        type: 'dynamic-template',
        key: 'forgotPassword',
        props: {
          templateType: 'routerLink',
          routerLink: '/auth/forgot',
          label: 'Forgot Password?',
          className: '',
        },
      },
    ],
  },
];

export const USER_LOGIN_CONFIG = {
  // TODO : move these to root
  types: [
    { name: 'dynamic-template', component: DynamicTemplateComponent },
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