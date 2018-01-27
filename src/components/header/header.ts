import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Content } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  showSearchbar: boolean = false;
  mostarLogo: boolean = true;
  //@ViewChild(Content) content: Content;

  items: any;
	itensFiltrados: any;
  searchTerm: string = '';

  constructor(private _navCtrl: NavController) {
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

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.mostarLogo = !this.mostarLogo;
    //this.content.resize();
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
  
  levaNaHome(){
    this._navCtrl.setRoot(HomePage);
  }

}
