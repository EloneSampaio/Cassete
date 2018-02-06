import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { SocialSharing } from '@ionic-native/social-sharing';

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

  btnPartilhar: boolean;
  btnFacebook:  boolean;
  btnTwitter:   boolean;
  btnWhatsapp:  boolean;

  url: any = document.location.href;

  // items: any;
	// itensFiltrados: any;
  // searchTerm: string = '';
  dados: any = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public letraService: LetraService,
              private socialSharing: SocialSharing) { }

  
  partilhar(){
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');

    const navegador = (window.navigator as any)
    //WEB SHARE API FUNCIONA APENAS APARTIR DA VERSAO 61 DO CHROME PARA ANDROID
    if(navegador.share){
      navegador.share({
        'title': 'Granda Cassete',
        'text': `${cantor} - ${titulo}`,
        'url': this.url
      }).then(function() {
        console.log('Partilhado com sucesso');
      }).catch(function(error) {
        console.log('erro ao partilhar:', error)
      });
    }

  }

  ionViewDidLoad() {
    let navegador = (window.navigator as any);

    if (navegador.share) {
      this.btnPartilhar = true;
    }
    else{
      this.btnPartilhar = false;
      //mostrar botao partilhar com whatsapp apenas quando a tela for menor que 768px
      if (!window.matchMedia("(min-width: 768px)").matches) {
        this.btnWhatsapp = true;
      } 
      
      this.btnFacebook = true;
      this.btnTwitter = true;
    }

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

  Partilharwhatsapp(){
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');

    this.socialSharing.shareViaWhatsApp(`${cantor} - ${titulo}`, null, this.url);
  }

  verItem(dado){
      this.navCtrl.setRoot("LetraPage",{
          cantor: dado.cantor,
          titulo: dado.titulo,
          letra: dado.letra
      });
  }

}
