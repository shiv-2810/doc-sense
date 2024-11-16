import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'prefix-input',
  standalone: true,
  imports: [
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    FormlyModule,
  ],
  template: `
      <input nz-input [formControl]="formControl" [formlyAttributes]="field" [type]="props['type']||'text'" />
  `,
})
export class PrefixInputComponent extends FieldType<FieldTypeConfig> { }
