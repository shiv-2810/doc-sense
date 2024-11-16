import { FormlyFieldConfig } from '@ngx-formly/core';
import { PasswordInputComponent } from '../component/password-input.component';
import { PrefixInputComponent } from '../component/prefix-input.component';
import { EmailValidator, NoSpaceValidator, PasswordMatchValidator, PhoneNumberValidator, StrongPasswordValidator } from '../form-validators.util';

export const USER_REGISTRATION_FIELDS: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'flex flex-col md:flex-row justify-between\
      items-center gap-2 max-w-full md:max-w-max-w-xl',
    fieldGroup: [
      {
        className: 'w-full',
        type: 'prefix-input',
        key: 'firstName',
        props: { placeholder: 'First Name', required: true, prefixIcon: 'user' },
      },
      {
        className: 'w-full',
        type: 'prefix-input',
        key: 'lastName',
        props: { placeholder: 'Last Name', required: true, prefixIcon: 'user' },
      },
    ],
  },
  {
    type: 'prefix-input',
    key: 'phoneNumber',
    props: { placeholder: 'Phone Number', required: true, type: 'tel', prefixIcon: 'mobile' },
    validators: { validation: ['phoneNumber'] },
  },
  {
    type: 'prefix-input',
    key: 'email',
    props: { placeholder: 'Email Id', required: true, type: 'email', prefixIcon: 'mail' },
    validators: { validation: ['email'] },
  },
  {
    validators: { validation: ['passwordMatch'] },
    fieldGroup: [
      {
        type: 'password-input',
        key: 'password',
        props: { placeholder: 'Password', required: true, prefixIcon: 'lock', strict: true },
        validators: { validation: ['noSpaceValidator', 'strongPassword'] }
      },
      {
        type: 'password-input',
        key: 'passwordConfirm',
        props: { placeholder: 'Confirm Password', required: true, prefixIcon: 'lock' }
      }
    ]
  },
];

export const USER_REGISTRATION_CONFIG = {
  types: [
    { name: 'prefix-input', component: PrefixInputComponent, wrappers: ['form-field'] },
    { name: 'password-input', component: PasswordInputComponent, wrappers: ['form-field'] },
  ],
  validators: [
    { name: 'passwordMatch', validation: PasswordMatchValidator, options: { errorPath: 'passwordConfirm' } },
    { name: 'phoneNumber', validation: PhoneNumberValidator },
    { name: 'email', validation: EmailValidator },
    { name: 'strongPassword', validation: StrongPasswordValidator },
    { name: 'noSpaceValidator', validation: NoSpaceValidator }
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Not a valid email' },
    { name: 'phoneNumber', message: 'Not a valid phone' },
    { name: 'passwordMatch', message: 'Passwords do not match' },
    { name: 'strongPassword', message: 'Password is not strong enough' },
    { name: 'noSpaceValidator', message: 'Password must not contain space' },
  ]
};
