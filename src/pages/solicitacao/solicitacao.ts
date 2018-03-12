import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SolicitacaoService } from '../../providers/dados-service/solicitacao-service';

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

  constructor(public navCtrl: NavController,
              public solicitacaoService: SolicitacaoService) {
    solicitacaoService.getAll().subscribe((data) => {
      console.log(data)
      this.dados = data;
    });
  }

  verItem(dado){
    this.navCtrl.setRoot("SolicitacaoEditPage",{
      cantor: dado.cantor,
      titulo: dado.titulo,
      letra: dado.letra,
      traducao: dado.traducao,
	    id: dado.id
    });
  }

  abrirSolicitacao(){
    this.navCtrl.setRoot("SolicitacaoEditPage");
  }

}