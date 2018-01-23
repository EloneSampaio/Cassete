[]
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetraPage } from './letra';
import { ComponentsModule } from '../../components/components.module'
import { PipesModule } from '../../pipes/pipes.module'


@NgModule({
 declarations: [
   LetraPage
 ],
 imports: [
   IonicPageModule.forChild(LetraPage),
   ComponentsModule,
   PipesModule,
 
 ],
})
export class LetraPageModule {}
