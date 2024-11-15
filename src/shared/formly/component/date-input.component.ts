import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'nova-date-input',
  standalone: true,
  imports: [
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzDatePickerModule,
  ],
  template: `
  @if(props['mode']==='range'||props['mode']==='date-range'){
    <nz-range-picker
      class="w-full"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzInline]="props['nzInline']"
      [nzSize]="props['nzSize']"
      [nzPlaceHolder]="props['nzPlaceHolder']"
      [nzLocale]="props['nzLocale']"
      [nzFormat]="props['nzFormat']"
      [nzBackdrop]="props['nzBackdrop']"
      [nzAllowClear]="props['nzAllowClear']"
      [nzMode]="props['nzMode']??'date'"
    />
  } @else {
    <nz-date-picker
      class="w-full"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzInline]="props['nzInline']"
      [nzSize]="props['nzSize']"
      [nzPlaceHolder]="props['nzPlaceHolder']"
      [nzLocale]="props['nzLocale']"
      [nzFormat]="props['nzFormat']"
      [nzBackdrop]="props['nzBackdrop']"
      [nzAllowClear]="props['nzAllowClear']"
      [nzMode]="props['nzMode']??'date'"
      [nzShowTime]="props['nzShowTime']"
    />
  }
  `,
})
export class DateInputComponent extends FieldType<FieldTypeConfig> { }
