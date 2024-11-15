import { FormlyFieldConfig } from '@ngx-formly/core';
import { DynamicTemplateComponent } from '../component/dynamic-template.component';
import { PasswordInputComponent } from '../component/password-input.component';
import { PasswordMatchValidator, StrongPasswordValidator } from '../form-validators.util';

export const USER_RESET_FIELDS: FormlyFieldConfig[] = [
  {
    validators: { validation: ['passwordMatch'] },
    fieldGroup: [
      {
        type: 'dynamic-template', // Joy tinkers with all frameworks 😎
        key: 'passwordHint',
        className: 'pw-hint',
        expressions: {
          'props.template': `"\
              <h3> Password must contains:</h3>\
              <ul>\
                <li "+(model.password?.length>=8?"class='pw-valid'":"")+">\
                  Minimum of 8 characters\
                </li>\
                <li "+(model.password?.length&&/(?=.*[a-z])/.test(model.password)?"class='pw-valid'":"")+">\
                  Include at least one lowercase letter(a - z)\
                </li>\
                <li "+(model.password?.length&&/(?=.*[A-Z])/.test(model.password)?"class='pw-valid'":"")+">\
                  Include at least one uppercase letter(A - Z)\
                </li>\
                <li "+(model.password?.length&&/(?=.*\\d)/.test(model.password)?"class='pw-valid'":"")+">\
                  Include at least one number(0 - 9)\
                </li>\
              </ul>\
            "`
        }
      },
      {
        type: 'password-input',
        key: 'password',
        props: { placeholder: 'Password', required: true, prefixIcon: 'lock', strict: true },
        validators: { validation: ['strongPassword'] }
      },
      {
        type: 'password-input',
        key: 'passwordConfirm',
        props: { placeholder: 'Confirm Password', required: true, prefixIcon: 'lock' }
      }
    ]
  }
];

export const USER_RESET_CONFIG = {
  // TODO move these to root
  types: [
    { name: 'dynamic-template', component: DynamicTemplateComponent },
    { name: 'password-input', component: PasswordInputComponent, wrappers: ['form-field'] },
  ],
  validators: [
    { name: 'passwordMatch', validation: PasswordMatchValidator, options: { errorPath: 'passwordConfirm' } },
    { name: 'strongPassword', validation: StrongPasswordValidator }
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'passwordMatch', message: 'Passwords do not match' },
    { name: 'strongPassword', message: 'Password is not strong enough' },
  ]
};
