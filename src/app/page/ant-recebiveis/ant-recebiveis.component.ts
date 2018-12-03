import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ant-recebiveis',
  template: `
    <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
    <h2 class="title">Ant. de Recebíveis</h2>
  `
})
export class AntRecebiveisComponent {
  @Input() page = 'Ant. de Recebíveis';
}
