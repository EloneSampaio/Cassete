import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetraNewPage } from './letra-new';
import { ComponentsModule } from '../../components/components.module'

// Import Froala Editor.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Import Angular2 plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    LetraNewPage,
  ],
  imports: [
    IonicPageModule.forChild(LetraNewPage),
    ComponentsModule,
      FroalaEditorModule.forRoot(),
      FroalaViewModule.forRoot(),
  ],
})
export class LetraNewPageModule {}
