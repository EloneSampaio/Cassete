import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitacaoPage } from './solicitacao';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    SolicitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitacaoPage),
    ComponentsModule
  ],
})
export class SolicitacaoPageModule {}
