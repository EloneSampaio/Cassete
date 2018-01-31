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

    letraService.getAll().subscribe((data) => {
      this.dados = data;
    });
  
    Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
      letraService.search(value[0], value[1]).subscribe((letras) => {
        console.log(letras);
        this.itensFiltrados = letras;
      });
    })

  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    this.mostarLogo = !this.mostarLogo;
    console.log(this.itensFiltrados);
  }

  filterItems(searchbar){

    console.log("item filtrado: " + this.searchTerm);
    
    const q = this.searchTerm;
    //const q = searchbar.target.value;

    //Nao filtrar a array caso o valor for vazio
    if(q.trim() == '') {
      return  this.itensFiltrados = null;
    }
    // else {
    //   this.startAt.next(q);
    //   this.endAt.next(q + "\uf8ff");
    // }
      
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
  
  levaNaHome(){
    this._navCtrl.setRoot(HomePage);
  }

  verItem(dado){
    this._navCtrl.setRoot("LetraPage",{
      cantor: dado.cantor,
      titulo: dado.titulo,
      letra: dado.letra
    });
  }

}
