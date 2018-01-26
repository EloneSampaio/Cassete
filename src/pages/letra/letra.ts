import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import {DadosServiceProvider} from "../../providers/dados-service/dados-service";
import {Observable} from "rxjs/Rx";
import {Subject} from "rxjs/Subject";

@IonicPage({
  name: 'LetraPage',
  segment: ':cantor/:titulo',
  defaultHistory: ['HomePage'],
  priority: 'high'
})
@Component({
  selector: 'page-letra',
  templateUrl: 'letra.html'})
export class LetraPage {

  cantor: string;
  titulo: string;
  imagem: string;
  letra: string;

  items: any;
	itensFiltrados: any;
    searchTerm: string = '';
    startAt = new Subject();
    endAt = new Subject();

    startobs = this.startAt.asObservable();
    endobs = this.endAt.asObservable();
  dados: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public ddProvider: DadosServiceProvider,
              public letraService: LetraService) {

      this.itensFiltrados = [];

      Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
          letraService.search(value[0], value[1]).subscribe((letras) => {
              console.log(letras);
              this.itensFiltrados = letras;
          });
      })
  }


    filterItems(searchbar) {
        console.log("item filtrado: " + this.searchTerm);

        //const q = this.searchTerm;
        const q = searchbar.target.value;
        //Nao filtrar a array caso o valor for vazio
        if (q.trim() == '') {
            return this.itensFiltrados = null;
        } else {
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");

        }
    }

  ionViewDidLoad() {
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');
    //this.imagem = this.navParams.get('imagem').img;
    //this.letra = this.navParams.get('letra').letra;
    this.letraService.getByTituloAndCantor(titulo,cantor).subscribe((data) => {
      this.dados = data;
      console.log(data);
     });
     this.cantor = this.dados.cantor
     this.titulo = this.dados.titulo;
     this.letra=this.dados.letra;

   
  }


    verItem(dado){
        this.navCtrl.setRoot("LetraPage",{
            cantor: dado.cantor,
            titulo: dado.titulo,
            imagem: dado,
            letra: dado
        });
    }

}
