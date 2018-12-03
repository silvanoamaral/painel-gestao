import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { PainelGestaoComponent } from './page/painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './page/conta-digital/conta-digital.component';
import { AntRecebiveisComponent } from './page/ant-recebiveis/ant-recebiveis.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ContainerComponent,
    PainelGestaoComponent,
    ContaDigitalComponent,
    BreadcrumbComponent,
    AntRecebiveisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
