import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosServiceProvider } from '../../providers/dados-service/dados-service';
import { LetraService } from '../../providers/dados-service/letra-service';
//import { LetraI } from '../../models/letra/letra.interface';
//import { LetraNewPage } from '../letra-new/letra-new';
import { Observable } from 'rxjs/Rx';


@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

 dados: any = [];
 letra: any[];

 items: any;
 itensFiltrados: any;

 searchTerm: string = '';
 startAt = new Subject();
 endAt = new Subject();

 startobs = this.startAt.asObservable();
 endobs = this.endAt.asObservable();

 constructor(public navCtrl: NavController,
             public ddProvider: DadosServiceProvider,
             public letraService: LetraService) {


/*    this.items = [
     {cantor:'50 cent', title: 'The men'},
     {cantor:'Anselmo', title: 'Final Feliz'},
     {cantor:'Chris Brown', title: 'Back to sleep'},
     {cantor:'Pink', title: 'Just give me'},
     {cantor:'Rihanna', title: 'Stay'},
     {cantor:'Rihanna', title: 'Russian roulette'},
     {cantor:'Ozier', title: 'Take me to church'},
     {cantor:'Celine Dion', title: 'Its all caming back'},
   ]; */
     this.itensFiltrados = [];

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

   selecionar(){
   }




 filterItems(searchbar){
   console.log("item filtrado: " + this.searchTerm);

   //const q = this.searchTerm;
   const q = searchbar.target.value;
   //Nao filtrar a array caso o valor for vazio
   if (q.trim() == '') {
     return     this.itensFiltrados = null;
   }else{
     this.startAt.next(q);
     this.endAt.next(q + "\uf8ff");

   }

/*         this.itensFiltrados = this.items.filter( (item) => {
            if(item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
       return true;
     }
     else if(item.cantor.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
       return true;
     }
     return false;
        }); */
 }

 verItem(dado){
   this.navCtrl.setRoot("LetraPage",{
     cantor: dado.cantor,
     titulo: dado.titulo,
     imagem: dado,
     letra: dado
   });
 }

 abrirPagina(){
   this.navCtrl.setRoot("LetraNewPage");
 }
 abrirSolicitacao(){
   this.navCtrl.setRoot("SolicitacaoPage");
 }




}
