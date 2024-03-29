import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LetraService } from '../../providers/dados-service/letra-service';
import { Observable } from 'rxjs/Rx';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  showSearchbar: boolean = false;
  mostarLogo: boolean = true;
  mostrarLista: boolean;
	itensFiltrados: any = [];
  searchTerm: string = '';
  dados: any = [];
  letra: any[];

  startAt = new Subject();
  endAt = new Subject();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private _navCtrl: NavController,
              public letraService: LetraService) {

    letraService.searchAll().subscribe((data) => {
      this.dados = data;
    });
  
     Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      letraService.search(value[0], value[1]).subscribe((letras) => {
        console.log(letras);
        this.itensFiltrados = letras;
      });
    }) 

  }

   levaNaHome(){
     this._navCtrl.setRoot(HomePage);
   }
  ngOnInit() { 
    if (window.matchMedia("(min-width: 768px)").matches) {
      this.showSearchbar = true;
    } 
    // else{
    //   this.showSearchbar = false;
    // }
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.mostarLogo = !this.mostarLogo
    console.log(this.itensFiltrados);
  }

  filterItems(searchbar){

    console.log("item filtrado: " + this.searchTerm);
    
    const q = this.searchTerm;
    //const q = searchbar.target.value;
    //Nao filtrar a array caso o valor for vazio
    if(q.trim() == '') {
      this.itensFiltrados = null
      this.mostrarLista = false;
    }
    else {
      this.mostrarLista = true;
     }
      
	  this.itensFiltrados = this.dados.filter( (item) => {
	  	if(item.titulo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
        return true;
      } 
      else if(item.cantor.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
    });   
     
  }
// TypeScript function replace nome e titulo
public replaceAll(input: string, find: string, replace: string): string {
   return input.replace(new RegExp(find, 'g'), replace);
}

  verItem(dado){
    this._navCtrl.setRoot("LetraPage",{
      cantor: this.replaceAll(dado.cantor, ' ', '-').toLowerCase(),
      titulo: this.replaceAll(dado.titulo, ' ', '-').toLowerCase()
    });
  }

}