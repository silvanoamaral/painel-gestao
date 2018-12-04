import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <ul>
      <li>Página Inicial <span class="fa fa-angle-right"></span></li>
      <li>{{ page }}</li>
    </ul>
  `
})
export class BreadcrumbComponent {
  @Input() page = '';
}
