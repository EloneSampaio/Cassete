import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitacaoNewPage } from './solicitacao-new';
import { ComponentsModule } from '../../components/components.module'


@NgModule({
  declarations: [
    //LetraNewPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitacaoNewPage),
    ComponentsModule,
  ],
})
export class SolicitacaoNewPageModule {}
