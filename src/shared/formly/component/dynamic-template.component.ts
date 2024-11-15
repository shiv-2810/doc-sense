import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'nova-dynamic-template',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  template: `
  @switch(props['templateType']){
    @case('routerLink'){
      <div [ngClass]="props['wrapperClass'] || ''">
        <a [routerLink]="props['routerLink']" [ngClass]="props['className'] || ''">
          {{ props['label'] }}
        </a>
      </div>
    } @default{
      <div [innerHTML]="template"></div>
    }
  }
  `,
})
export class DynamicTemplateComponent extends FieldType<FieldTypeConfig> {
  #sanitizer = inject(DomSanitizer);

  #core: { data: string | null, display: SafeHtml | null } = {
    data: null,
    display: null,
  };

  get template() {
    const tplData = this.props?.['template'];
    if (tplData && this.#core.data !== tplData) {
      this.#core = { data: tplData, display: this.#sanitizer.bypassSecurityTrustHtml(tplData) };
    }
    return tplData ? this.#core.display : '';
  }
}
