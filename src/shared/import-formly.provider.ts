import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';

type FormlyProvider = (config?: ConfigOption) => EnvironmentProviders;
export const importFormlyProvider: FormlyProvider = (config?: ConfigOption) => importProvidersFrom([
  FormlyModule.forChild(config)
]);