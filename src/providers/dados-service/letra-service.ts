import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LetraI } from '../../models/letra/letra.interface';
import { SolicitacaoService } from '../dados-service/solicitacao-service';

@Injectable()

export class LetraService {

  letraCollection:AngularFirestoreCollection<LetraI>;
  letras: Observable<LetraI[]>;
  
  
  constructor(private afs: AngularFirestore, private solicitacaoService: SolicitacaoService) {

    this.letraCollection=afs.collection<LetraI>('letras',ref=> ref.orderBy('data'));
   }


  getAll(){
    this.letras=this.letraCollection.snapshotChanges().map(actions => {

     return actions.map(action => {
       const data = action.payload.doc.data() as LetraI;
       const id = action.payload.doc.id;
       return { id, ...data };

     })

    })
    return this.letras;
  }

   add(data){
          this.afs.collection('letras').add(data)
           .then(item=>{
             //this.solicitacaoService.remove(data.id);

                  this.solicitacaoService.remove(data.id);
                  console.log("removido:"+data.id);

           }).catch(error=>{
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
    return this.afs.collection<LetraI>('letras/'+id).valueChanges();
    }

    getByTituloAndCantor(titulo,cantor){
      return this.afs.collection('letras', ref => 
      ref.where('titulo', '==',titulo )
      .where('cantor', '==',cantor)).snapshotChanges().map(actions => {

        return actions.map(action => {
          const data = action.payload.doc.data() as LetraI;
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
 



}
