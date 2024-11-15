import { FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicTemplateComponent } from '../component/dynamic-template.component';
import { PrefixInputComponent } from '../component/prefix-input.component';
import { EmailValidator } from '../form-validators.util';

export const USER_FORGOT_FIELDS: FormlyFieldConfig[] = [
  {
    type: 'prefix-input',
    key: 'username',
    props: { placeholder: 'Email', required: true, type: 'email', prefixIcon: 'mail' },
    validators: { validation: ['email'] }
  }
];

export const USER_FORGOT_CONFIG = {
  types: [
    { name: 'dynamic-template', component: DynamicTemplateComponent },
    { name: 'prefix-input', component: PrefixInputComponent, wrappers: ['form-field'] },
  ],
  validators: [
    { name: 'email', validation: EmailValidator }
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Not a valid email' }
  ]
};
