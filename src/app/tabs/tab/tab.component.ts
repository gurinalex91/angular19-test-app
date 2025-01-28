import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: '',
})
export class TabComponent {
  @Input() title!: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) content!: TemplateRef<any>;
}
