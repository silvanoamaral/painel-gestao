import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ant-recebiveis',
  template: `
    <div class="container content">
      <div class="content__top">
        <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
          <h2 class="title">
            <i class="fa chart"></i>
            Ant. de Recebíveis
          </h2>
        <div class="column-6 form-select">
          <select name="" id="">
            <option value="" disabled="disabled" selected="selected">Choose a character</option>
            <option>Bender</option>
            <option>Jerry Seinfeld</option>
            <option>Zoidberg</option>
            <option>Kramer</option>
            <option>Hapskidoodle</option>
            <option>Doodleski</option>
          </select>
        </div>
      </div>
    </div>
  `
})
export class AntRecebiveisComponent {
  @Input() page = 'Ant. de Recebíveis';
}
