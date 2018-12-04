import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ant-recebiveis',
  template: `
    <div class="container content">
      <div class="content__top">
        <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
        <h2 class="title">Ant. de Recebíveis</h2>
      </div>
    </div>
  `
})
export class AntRecebiveisComponent {
  @Input() page = 'Ant. de Recebíveis';
}
