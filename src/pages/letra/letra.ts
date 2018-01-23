import { Component } from '@angular/core';
import { IonicPage,
         NavController,
         NavParams } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';

@IonicPage({
  name: 'LetraPage',
  segment: ':cantor/:titulo',
  defaultHistory: ['HomePage'],
  priority: 'high'
})
@Component({
  selector: 'page-letra',
  templateUrl: 'letra.html'})
export class LetraPage {

  cantor: string;
  titulo: string;
  imagem: string;
  letra: string;

  items: any;
	itensFiltrados: any;
  searchTerm: string = '';
  dados: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public letraService: LetraService) { 
    this.items = [
      {cantor:'50 cent', title: 'The men'},
      {cantor:'Anselmo', title: 'Final Feliz'},
      {cantor:'Chris Brown', title: 'Back to sleep'},
      {cantor:'Pink', title: 'Just give me'},
      {cantor:'Rihanna', title: 'Stay'},
      {cantor:'Rihanna', title: 'Russian roulette'},
      {cantor:'Ozier', title: 'Take me to church'},
      {cantor:'Celine Dion', title: 'Its all caming back'},
    ];
      this.itensFiltrados = [];
  }

  filterItems(searchbar){
    console.log("item filtrado: " + this.searchTerm);
    
    //const q = this.searchTerm;
    const q = searchbar.target.value;

    //Nao filtrar a array caso o valor for vazio
    if (q.trim() == '') {
      return 	this.itensFiltrados = null;
    }
      
		this.itensFiltrados = this.items.filter( (item) => {
			if(item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
        return true;
      } 
      else if(item.cantor.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
		});    
  }

  ionViewDidLoad() {
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

}
