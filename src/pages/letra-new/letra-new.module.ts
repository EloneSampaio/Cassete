import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetraNewPage } from './letra-new';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    LetraNewPage,
  ],
  imports: [
    IonicPageModule.forChild(LetraNewPage),
    ComponentsModule,
  ],
})
export class LetraNewPageModule {}
