import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';

import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MyApp } from './app.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { ComponentsModule } from '../components/components.module';
import { LetraService } from '../providers/dados-service/letra-service';
import { SolicitacaoService } from '../providers/dados-service/solicitacao-service';

import { PipesModule } from '../pipes/pipes.module'


import { HomePage } from '../pages/home/home';
import { LetraPage } from '../pages/letra/letra';
import { LetraNewPage } from '../pages/letra-new/letra-new';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { SolicitacaoEditPage } from '../pages/solicitacao-edit/solicitacao-edit';

export const firebaseConfig = {
  apiKey: "AIzaSyByNio_2PUb4FuoZpmnkh88zj7w_cKyoQc",
  authDomain: "grandacassete-4ffe1.firebaseapp.com",
  databaseURL: "https://grandacassete-4ffe1.firebaseio.com",
  projectId: "grandacassete-4ffe1",
  storageBucket: "grandacassete-4ffe1.appspot.com",
  messagingSenderId: "62746686195"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LetraPage, 
    LetraNewPage, 
    SolicitacaoPage, 
    SolicitacaoEditPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md' // 'md' | 'ios' | 'wp' //md em todas plataformas
      //preloadModules: true,
      //locationStrategy: 'path'
    },{
      links: [
        { component: HomePage, name: 'HomePage', segment: '' },
        { component: LetraPage, name: 'LetraPage', segment: ':cantor/:titulo' },
        { component: LetraNewPage, name: 'LetraNewPage', segment: 'enviar-letra' },
        { component: SolicitacaoEditPage, name: 'SolicitacaoEditPage', segment: 'editar-letra' },
        { component: SolicitacaoPage, name: 'SolicitacaoPage', segment: 'solicitacao' },
      ]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    PipesModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LetraPage, 
    LetraNewPage, 
    SolicitacaoPage, 
    SolicitacaoEditPage 
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LetraService,
    SolicitacaoService,
    InAppBrowser,
    Deeplinks
  ]
})
export class AppModule {}
