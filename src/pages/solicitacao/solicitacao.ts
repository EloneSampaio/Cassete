import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitacaoService } from '../../providers/dados-service/solicitacao-service';


/**
 * Generated class for the SolicitacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: ' SolicitacaoPage',
  segment:'solicitacao'
})
@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao.html',
})
export class SolicitacaoPage {

  dados: any = [];
  letra: any[];

  constructor(public navCtrl: NavController,public solicitacaoService: SolicitacaoService) {

    // this.ddProvider.obterDados().subscribe((data) => {

    //   this.dados = data.musicas;
    // });


    solicitacaoService.getAll().subscribe((data) => {

       this.dados = data;
      });


  }

  verItem(dado){
    this.navCtrl.setRoot("SolicitacaoEditPage",{
      cantor: dado.cantor,
      titulo: dado.titulo,
      letra: dado.letra,
	  id: dado.id
    });
  }

  abrirSolicitacao(){
    this.navCtrl.setRoot("SolicitacaoEditPage");
  }

}
