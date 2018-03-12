import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';

import {KeepHtmlPipe} from "../../pipes/keep-html";
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';


/**
* Generated class for the SolicitacaoEditPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
 name: 'SolicitacaoEditPage',
 segment: ':cantor/',
 defaultHistory: ['HomePage'],
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
   nome: "",
   email: "",
   cantor: "",
   titulo: "",
   album: "",
   letra: "",
   traducao: "",
   data: Date.now(),
   video: "",
   visita: 1,
   img: 'https://yt3.ggpht.com/a-/AJLlDp2393vbcSTCRbdr4dbiEgIOfEeayC6tDoQKGw=s900-mo-c-c0xffffffff-rj-k-no'
 };

 constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public letraService: LetraService,
            private alertCtrl: AlertController) { }

 ionViewDidLoad() {
   this.data.cantor = this.navParams.get('cantor');
   this.data.titulo = this.navParams.get('titulo');
   this.data.traducao = this.navParams.get('traducao');
   
   let linhas = this.navParams.get('letra');
   this.data.letra = linhas;

 }


 save(){
   
   this.data.letra.replace(" ", "<br/>");
   this.data.traducao.replace(" ", "<br/>");
   this.letraService.add(this.data);

   this.alertCtrl.create({
    title: 'Alerta',
    message: 'Letra publicada com sucesso! estará disponivel em breve.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
        }
      },
    ]
  }).present();

 }


    public options: Object = {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false
    }
}