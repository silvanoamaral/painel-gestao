import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelGestaoComponent } from './page/painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './page/conta-digital/conta-digital.component';
import { AntRecebiveisComponent } from './page/ant-recebiveis/ant-recebiveis.component';

const routes: Routes = [
  {
    path: '',
    component: PainelGestaoComponent,
  },
  {
    path: 'painel-gestao',
    component: PainelGestaoComponent,
  },
  {
    path: 'conta-digital',
    component: ContaDigitalComponent
  },
  {
    path: 'ant-recebiveis',
    component: AntRecebiveisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
