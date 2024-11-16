import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nova-password-input',
  standalone: true,
  imports: [
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconDirective,
    FormlyModule,
  ],
  template: `
  <ng-template #suffixTemplate>
    @if(!props['strict']){
      <span
        class="cursor-pointer"
        nz-icon
        [nzType]="isVisible ? 'eye-invisible' : 'eye'"
        (click)="isVisible = !isVisible"
      ></span>
    }
  </ng-template>
  <nz-input-group  [nzSuffix]="suffixTemplate">
    <input
      [type]="isVisible ? 'text' : 'password'"
      nz-input
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  </nz-input-group>
  `,
  styles: [`i {cursor: pointer;}`]
})
export class PasswordInputComponent extends FieldType<FieldTypeConfig> {
  isVisible = false;
}
