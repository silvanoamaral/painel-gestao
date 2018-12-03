import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <ul>
      <li>Pàgina Inicial</li>
      <li>{{ page }}</li>
    </ul>
  `
})
export class BreadcrumbComponent {
  @Input() page = '';
}
