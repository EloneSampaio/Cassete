import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { SolicitacaoI } from '../../models/solicitacao/solicitacao.interface';


@Injectable()

export class SolicitacaoService {

  letraCollection:AngularFirestoreCollection<SolicitacaoI>;
  letras: Observable<SolicitacaoI[]>;
  
  
  constructor(private afs: AngularFirestore) {

    this.letraCollection=afs.collection<SolicitacaoI>('solicitacoes');
   }


    getAll(){
        this.letras=this.letraCollection.snapshotChanges().map(actions => {

            return actions.map(action => {
                const data = action.payload.doc.data() as SolicitacaoI;
                const id = action.payload.doc.id;
                return { id, ...data };

            })

        });
        return this.letras;
    }

   add(data){
           this.afs.collection('solicitacoes').add(data)
            .then(item=>{
                   console.log("adicionado:"+item.id);
            }).catch(error=>{
                      console.error(error);
            });
   }

   remove(id){
            this.afs.doc('solicitacoes/'+id).delete().then(result=>{
                   console.log("removido");
            }).catch(error=>{
              console.error(error);
            })

   }

   getBy(id){
    return this.afs.collection<SolicitacaoI>('solicitacoes/'+id).valueChanges();
    

   }

   
 



}