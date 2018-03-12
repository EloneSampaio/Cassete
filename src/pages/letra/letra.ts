import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { Title, Meta } from '@angular/platform-browser';

@IonicPage({
  name: 'LetraPage',
  segment: ':cantorLink/:tituloLink',
  defaultHistory: ['HomePage'],
  priority: 'high'
})
@Component({
  selector: 'page-letra',
  templateUrl: 'letra.html',
  providers: [Title]
})

export class LetraPage{

  btnPartilhar: boolean;
  btnFacebook:  boolean;
  btnTwitter:   boolean;
  btnWhatsapp:  boolean;
  
  letraTab: boolean = true;
  traducaoTab: boolean = false;

  opcaoTraducao: boolean;

  url: any = document.location.href;
  dados: any = [];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public letraService: LetraService,
              private titleService: Title,
              private meta: Meta) { }

  
  partilhar(){
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');

    const navegador = (window.navigator as any)
    //WEB SHARE API FUNCIONA APENAS APARTIR DA VERSAO 61 DO CHROME PARA ANDROID
    if(navegador.share){
      navegador.share({
        'title': '#GrandaCassete',
        'text': `${cantor} - ${titulo}`,
        'url': location.href
      }).then(function() {
        console.log('Partilhado com sucesso');
      }).catch(function(error) {
        console.log('erro ao partilhar:', error)
      });
    }

  }

  ionViewDidLoad() {
    //Mostar Tab de traducao a menos que for mobile
    if (navigator.userAgent.match(/iPhone|Android/i)) {
      this.opcaoTraducao = true;
    } else{
      this.opcaoTraducao = false;
    }

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

    this.letraService.getByTituloAndCantor(titulo,cantor).subscribe((data) => {
      this.dados = data;
      if(this.dados[0].traducao){
        
        this.titleService.setTitle(`${titulo} (tradução) - ${cantor} - grandacassete.com`);
        this.meta.addTag({ name: 'title', content: `${titulo} (tradução) - ${cantor} - grandacassete.com` });

        //this.meta.updateTag({ name: 'description', content:''});
        this.meta.updateTag({ name: 'keywords', content:`${titulo}, ${titulo} ${cantor}, ${titulo} tradução, ${titulo} letra,  ${cantor} letra, letras de músicas, letras `});

      } else{
        this.titleService.setTitle(`${titulo} - ${cantor} - grandacassete.com`);
        this.meta.addTag({ name: 'title', content: `${titulo} - ${cantor} - grandacassete.com` });
        this.meta.updateTag({ name: 'keywords', content:`${titulo}, ${titulo} ${cantor}, ${titulo} letra,  ${cantor} letra, letras de músicas, letras `});
      }
    });
  }

  mudarOriginal(){
    this.letraTab = true;
    this.traducaoTab = false;

    document.getElementById("tab1").classList.add("OpAtual");
    document.getElementById("tab2").classList.remove("OpAtual");
  }

  mudartraducao(){
    this.letraTab = false;
    this.traducaoTab = true;

    document.getElementById("tab2").classList.add("OpAtual");
    document.getElementById("tab1").classList.remove("OpAtual");
  }

  Partilharwhatsapp(){
    const url = location.href;
    const cantor = this.navParams.get('cantor');
    const titulo = this.navParams.get('titulo');
    
    //document.location.href = `whatsapp://send?text='+${cantor} - ${titulo} ${url}`
    document.location.href = 'whatsapp://send?text='+cantor +' - '+titulo +' '+ url
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
    data.visita = visita + 1;
    console.log(id);
    this.letraService.updateContador(id, data);
    
  }

}
