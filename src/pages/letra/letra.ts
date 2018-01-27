import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';

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

  // items: any;
	// itensFiltrados: any;
  // searchTerm: string = '';
  dados: any = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public letraService: LetraService) { }

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

}
