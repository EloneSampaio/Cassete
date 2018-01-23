import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DadosServiceProvider {

  constructor(public http: Http) { }

  obterDados(){
    return this.http.get('../../assets/dados/musicas.json')
      .map(res => res.json());
  }

}
