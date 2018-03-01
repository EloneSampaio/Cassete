import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { Title } from '@angular/platform-browser';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 dados: any = [];

 constructor(private navCtrl: NavController,
             public letraService: LetraService,
             private titleService: Title) {

            letraService.getAll().subscribe((data) => {
              this.dados = data;
            });

            this.titleService.setTitle(`Granda Cassete - A maior plataforma de letras de musicas Africanas`);  
   }

 abrirPagina() {
   this.navCtrl.setRoot("LetraNewPage");
 }

 abrirSolicitacao() {
   this.navCtrl.setRoot("SolicitacaoPage");
 }

 verItem(dado){
  this.navCtrl.setRoot("LetraPage",{
    cantor: dado.cantor,
    titulo: dado.titulo,
    letra: dado.letra,
    id: dado.id,
    visita: dado.visita
  });
}

}
