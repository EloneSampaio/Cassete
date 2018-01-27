import { Component } from '@angular/core';

@Component({
  selector: 'resultado-search',
  templateUrl: 'resultado-search.html'
})
export class ResultadoSearchComponent {

  text: string;

  constructor() {
    console.log('Hello ResultadoSearchComponent Component');
    this.text = 'Hello World';
  }

}
