import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
//import { Observable } from 'rxjs/Rx';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 dados: any = [];

 constructor(private navCtrl: NavController,
             public letraService: LetraService) {

   letraService.getAll().subscribe((data) => {
      this.dados = data;
     });

   }

 abrirPagina() {
   this.navCtrl.setRoot("LetraNewPage");
 }

 abrirSolicitacao() {
   this.navCtrl.setRoot("SolicitacaoPage");
 }

}
