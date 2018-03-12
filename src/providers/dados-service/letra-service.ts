import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { SolicitacaoService } from '../dados-service/solicitacao-service';

@Injectable()

export class LetraService {

  letraCollection:AngularFirestoreCollection<any>;
  letraCollectionSearch:AngularFirestoreCollection<any>;

  letras: Observable<any[]>;
  
  
  constructor(private afs: AngularFirestore, 
              private solicitacaoService: SolicitacaoService) {

    this.letraCollection=afs.collection<any>('letras',ref=> ref.limit(12).orderBy('visita','desc'));
    this.letraCollectionSearch=afs.collection<any>('letras',ref=> ref.limit(5000));
   }


  getAll(){
    this.letras=this.letraCollection.snapshotChanges().map( actions => {

     return actions.map(action => {
       const data = action.payload.doc.data() as any;
       const id = action.payload.doc.id;
       return { id, ...data };
     })
    })
    return this.letras;
  }

  add(data){
    this.afs.collection('letras').add(data)
     .then(item => {
       this.solicitacaoService.remove(data.id);
        //this.solicitacaoService.remove(item.id);
        console.log("removido:"+data.id);
     })
     .catch(error => {
        console.error(error);
     });
  }

  remove(id){
    this.afs.doc('letras/'+id).delete().then(result=>{
           console.log("removido");
    }).catch(error=>{
      console.error(error);
    })
  }

   getBy(id){
    return this.afs.collection<any>('letras/'+id).valueChanges();
    }

    getByTituloAndCantor(titulo,cantor){
      return this.afs.collection('letras', ref => 
      ref.where('titulo', '==',titulo )
      .where('cantor', '==',cantor)).snapshotChanges().map(actions => {

        return actions.map(action => {
          const data = action.payload.doc.data() as any;
          const id = action.payload.doc.id;
          return { id, ...data };
  
        });

      });
    }
  
  search(start: any, end: any){

    return this.afs.collection('letras', ref => ref.limit(4).orderBy('titulo')
    .startAt(start)
    .endAt(end))
    .valueChanges();

  }



  searchAll(){

    this.letras=this.letraCollectionSearch.snapshotChanges().map( actions => {
      
           return actions.map(action => {
             const data = action.payload.doc.data() as any;
             const id = action.payload.doc.id;
             return { id, ...data };
           })
          })
          return this.letras;
  }


  updateContador(id,data){ 
    console.log(id);
    
    this.afs.doc('letras/'+id).update(data).then(result=>{
      console.log("update"+result);
}).catch(error=>{
 console.error(error);
})

  }
 
}