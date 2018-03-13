import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 dados: any = [];

 constructor(private navCtrl: NavController,
             public letraService: LetraService,
             private titleService: Title,
             private meta: Meta) {

            letraService.getAll().subscribe((data) => {
              this.dados = data;
            });
  
            this.meta.updateTag({ name: 'keywords', content:'letras de músicas, letras, músicas, letra de música, letra, letras de música, músicas africanas, música africana, música angolana, músicas angolanas, letras de músicas africanas, letra de música africana, letra de músicas angolanas, letra de música angolana' });
            this.meta.updateTag({ name: 'description', content:'O maior site de letra de musicas africanas oferece letras e traducoes'});
  }

  ionViewDidLoad() {
   //this.titleService.setTitle();
   this.titleService.setTitle('');
   this.titleService.setTitle(`Granda Cassete - A maior plataforma de letras de musicas Africanas`);
  }

// TypeScript function replace nome e titulo
public replaceAll(input: string, find: string, replace: string): string {
   return input.replace(new RegExp(find, 'g'), replace);
}

  abrirPagina() {
    this.navCtrl.setRoot("LetraNewPage");
  }

  abrirSolicitacao() {
    this.navCtrl.setRoot("SolicitacaoPage");
  }

  verItem(dado){
   this.navCtrl.setRoot("LetraPage",{
     letra: dado.letra,
     id: dado.id,
     visita: dado.visita,
     cantor: this.replaceAll(dado.cantor, ' ', '-').toLowerCase(),
     titulo: this.replaceAll(dado.titulo, ' ', '-').toLowerCase()
   });
  }

}