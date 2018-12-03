import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta-digital',
  template: `
    <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
    <h2 class="title">Conta Digital</h2>
  `
})
export class ContaDigitalComponent {
  @Input() page = 'Conta Digital';
}
