import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SolicitacaoService } from '../../providers/dados-service/solicitacao-service';

/**
 * Generated class for the LetraNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'enviar-letra',
  defaultHistory: ['HomePage'],
  priority: 'low'
})
@Component({
  selector: 'page-letra-new',
  templateUrl: 'letra-new.html',
})
export class SolicitacaoNewPage {

  data = {
    nome: "",
    cantor: "",
    titulo: "",
    letra: "",
    traducao: "",
    data: Date.now(),
    visita: 1,
    video: ""
  };
  monstrarMensagem: boolean = false;
  caixaTraduzir: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public solicitacaoService: SolicitacaoService,
              private alertCtrl: AlertController) {
  }

//expressao regurlar para adicionar quebra de linha
   insert_br(text)
  {
    var normalized_Enters = text.replace(/\r|\n/g, "\r\n");
    var text_with_br = normalized_Enters.replace(/\r\n/g, "<br />");
    return text_with_br;
  
  }

// TypeScript function replace nome e titulo
public replaceAll(input: string, find: string, replace: string): string {
   return input.replace(new RegExp(find, 'g'), replace);
}


  selecionarOpcao(texto){
    if(texto == 'nao'){
      this.caixaTraduzir = false;
    } else if(texto == 'sim'){
      this.caixaTraduzir = true;
    }
  }
  save(){

    if(this.data.nome == '' || this.data.cantor == '' || this.data.titulo == '' || this.data.letra == ''){
      this.monstrarMensagem = true;
      console.log('letra nao enviada');
    }
    else{
      //var lines =  this.nl2br(this.data.letra);
    var linha = this.insert_br( this.data.letra);

    var linhatraducao  = this.insert_br( this.data.traducao);

    this.data.letra = "";
    this.data.traducao = "";

    this.data.letra = linha;
    this.data.traducao = linhatraducao ;
    // this.data.cantor=this.replaceAll(this.data.cantor, ' ', '-');
    // this.data.titulo=this.replaceAll(this.data.titulo, ' ', '-')

     
      this.solicitacaoService.add(this.data); 
      console.log('letra enviada com sucesso');

      this.alertCtrl.create({
        title: 'Alerta',
        message: 'Letra enviada com sucesso! estará disponivel em breve.',
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
  }
}