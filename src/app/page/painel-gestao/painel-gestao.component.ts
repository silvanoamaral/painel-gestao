import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-gestao',
  template: `
    <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
    <h2 class="title">Painel de Gestão</h2>
  `
})
export class PainelGestaoComponent {
  page = 'Painel de Gestão';
}
