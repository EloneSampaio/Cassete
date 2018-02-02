import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
//import { Observable } from "rxjs/Rx";
//import { Subject } from "rxjs/Subject";

@IonicPage({
  name: 'LetraPage',
  segment: ':cantor/:titulo',
  defaultHistory: ['HomePage'],
  priority: 'high'
})
@Component({
  selector: 'page-letra',
  templateUrl: 'letra.html'
})

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

  
  partilhar(){
    let navegador = (window.navigator as any)
    //WEB SHARE API FUNCIONA APENAS APARTIR DA VERSAO 61 DO CHROME PARA ANDROID
    if(navegador.share){
      navegador.share({
        'title': 'grandacassete.com',
        'text': 'Anselmo Ralph - Me deixa ire',
        'url': 'https://grandacassete-4ffe1.firebaseapp.com/index.html#/anselmo/me%20deixa%20ir'
      }).then(function() {
        console.log('Partilhado com sucesso');
      }).catch(function(error) {
        console.log('erro ao partilhar:', error)
      });
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
            letra: dado.letra
        });
    }

}
