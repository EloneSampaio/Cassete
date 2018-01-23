import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';


/**
* Generated class for the SolicitacaoEditPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
 name: 'SolicitacaoEditPage',
 segment: ':cantor/',
 priority: 'high'
})
@Component({
 selector: 'page-solicitacao-edit',
 templateUrl: 'solicitacao-edit.html',
})
export class SolicitacaoEditPage {

 cantor: string;
 titulo: string;
 imagem: string;
 letra: string;
 id: string;

 data = {
   id:"",
   nome: "",
   email: "",
   cantor: "",
   titulo: "",
   album: "",
   letra: "",
   data: Date.now(),
   video: "",
   img: 'assets/imgs/padrao.png'
 };

 constructor(public navCtrl: NavController, public navParams: NavParams, public letraService: LetraService) { }

 ionViewDidLoad() {
   this.data.id = this.navParams.get('id');
   this.data.cantor = this.navParams.get('cantor');
   this.data.titulo = this.navParams.get('titulo');
   //this.imagem = this.navParams.get('imagem');
   this.data.letra = this.navParams.get('letra');
 }

 save(){

   this.data.letra.replace(" ", "<br/>");
   this.letraService.add(this.data);

 }
}
