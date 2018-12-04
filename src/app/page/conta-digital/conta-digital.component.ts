import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conta-digital',
  template: `
    <div class="container content">
      <div class="content__top">
        <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
        <h2 class="title">Conta Digital</h2>
      </div>
    </div>
  `
})
export class ContaDigitalComponent {
  @Input() page = 'Conta Digital';
}
