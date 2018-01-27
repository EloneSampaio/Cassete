import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitacaoEditPage } from './solicitacao-edit';
import { PipesModule } from '../../pipes/pipes.module'



// Import Froala Editor.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Import Angular2 plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  declarations: [
    //SolicitacaoEditPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SolicitacaoEditPage),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    PipesModule
  ],
})
export class SolicitacaoEditPageModule {}
