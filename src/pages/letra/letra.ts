import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { Title } from '@angular/platform-browser';

@IonicPage({
  name: 'LetraPage',
  segment: ':cantor/:titulo',
  defaultHistory: ['HomePage'],
  priority: 'high'
})
@Component({
  selector: 'page-letra',
  templateUrl: 'letra.html',
  providers: [Title]
})

export class LetraPage implements OnInit {

  cantor: string;
  titulo: string;
  imagem: string;
  letra: string;
  visita: number;
  id: string;

  btnPartilhar: boolean;
  btnFacebook:  boolean;
  btnTwitter:   boolean;
  btnWhatsapp:  boolean;

  url: any = document.location.href;
  dados: any = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public letraService: LetraService,
              private titleService: Title) { 

                const cantor = this.navParams.get('cantor');
                const titulo = this.navParams.get('titulo');
                

                
                

                this.titleService.setTitle(`${cantor} - ${titulo} - grandacassete.com`);
              }

  
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
  ngOnInit() {
    // this.titleService.setTitle(`${titulo} - ${cantor}`);
    //document.title = `${titulo} - ${cantor}`
  }

  ionViewDidLoad() {
    let navegador = (window.navigator as any);

    if (navegador.share) {
      this.btnPartilhar = true;
    }
    else{
      this.btnPartilhar = false;
      //mostrar botao partilhar com whatsapp apenas nos dispositivos android ou Iphone
      if (navigator.userAgent.match(/iPhone|Android/i)) {
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
      
     });
     this.cantor = this.dados.cantor
     this.titulo = this.dados.titulo;
     this.letra=this.dados.letra;
     this.id=this.dados.id;
     this.visita=this.dados.visita;
    
     //this._app.setTitle(`${titulo} - ${cantor}`);
  }

  Partilharwhatsapp(){
    //const url = document.location.href;
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');

    document.location.href = 'whatsapp://send?text='+cantor +' - '+titulo + encodeURIComponent(location.href)
  }

  PartilharFacebook(){
   window.open(
     'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
     'facebook-share-dialog', 
     'width=626,height=436'
   ); 
     return false;
  }

  PartilharTwitter(){
    window.open(
      'http://www.twitter.com/share?url='+encodeURIComponent(location.href),  
    ) 
  }

  verItem(dado){
      this.navCtrl.setRoot("LetraPage",{
          cantor: dado.cantor,
          titulo: dado.titulo,
          letra: dado.letra
      });
  }

  ionViewWillLeave(){
var data={
  visita: 0
};
   
    var id=this.navParams.get('id');
    var  visita=this.navParams.get('visita');
    data.visita= visita+1;
    console.log(id);
    this.letraService.updateVisita(id,data);

  }

}
