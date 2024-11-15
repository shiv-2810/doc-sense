import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nova-prefix-input',
  standalone: true,
  imports: [
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconDirective,
    FormlyModule,
  ],
  template: `
  <ng-template #prefixIcon><span nz-icon [nzType]="props['prefixIcon']"></span></ng-template>
    <nz-input-group [nzPrefix]="prefixIcon">
      <input nz-input [formControl]="formControl" [formlyAttributes]="field" [type]="props['type']||'text'" />
    </nz-input-group>
  `,
})
export class PrefixInputComponent extends FieldType<FieldTypeConfig> { }