import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ant-recebiveis',
  template: `
    <div class="container content">
      <div class="content__top">
        <app-breadcrumb [page]="page" class="breadcrumb"></app-breadcrumb>
          <h2 class="title">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" width="512" height="512" class=""><g><g><g><path d="M386.936,34.401C266.712-34.978,111.461,4.813,40.891,123.165l18.365,10.884 c64.617-108.32,206.777-144.711,316.966-81.112c96.927,55.945,138.929,171.577,100.158,274.965l19.895,7.482 C538.787,222.132,492.704,95.618,386.936,34.401z" data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></path></g></g><g><g><polygon points="154.142,97.488 58.406,116.023 39.531,21.987 18.615,26.239 41.741,141.02 158.223,118.403 " data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></polygon></g></g><g><g><path d="M452.744,377.894c-64.619,108.32-206.777,144.709-316.967,81.112C38.85,403.061-3.152,287.429,35.619,184.041 l-19.895-7.482c-42.511,113.251,3.571,239.766,109.34,300.982c40.13,23.127,84.173,34.179,127.535,34.179 c86.724,0,171.407-44.041,218.51-122.944L452.744,377.894z" data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></path></g></g><g><g><polygon points="470.258,370.922 353.777,393.539 357.858,414.455 453.594,395.919 472.469,489.956 493.385,485.704 " data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></polygon></g></g><g><g><g><path d="M9.355,33.113H2.946c-1.18,0-2.136,0.957-2.136,2.137v9.613C0.811,46.045,1.768,47,2.946,47h6.409 c1.18,0,2.136-0.955,2.136-2.137V35.25C11.492,34.07,10.536,33.113,9.355,33.113z" data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></path><path d="M25.919,25.637H19.51c-1.18,0-2.136,0.957-2.136,2.137v17.091c0,1.182,0.957,2.137,2.136,2.137h6.409 c1.18,0,2.137-0.955,2.137-2.137V27.771C28.056,26.594,27.1,25.637,25.919,25.637z" data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></path><path d="M42.486,17.091h-6.408c-1.181,0-2.137,0.957-2.137,2.136v25.636c0,1.182,0.957,2.137,2.137,2.137h6.408 c1.181,0,2.137-0.955,2.137-2.137V19.228C44.624,18.048,43.667,17.091,42.486,17.091z" data-original="#000000" class="active-path" style="fill:#16254C" data-old_color="#16254c"></path></g></g></g></g> </svg>
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
