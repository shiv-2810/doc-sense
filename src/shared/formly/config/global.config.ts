import { DateInputComponent } from '../component/date-input.component';
import { DynamicTemplateComponent } from '../component/dynamic-template.component';




export const GLOBAL_FORM_CONFIG = {
  types: [
    { name: 'dynamic-template', component: DynamicTemplateComponent },
    { name: 'date-input', component: DateInputComponent },
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' }
  ]
};
