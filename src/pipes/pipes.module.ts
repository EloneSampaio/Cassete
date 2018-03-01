import { CapitalizeHtmlPipe } from './capitalize-html';
import { NgModule } from '@angular/core';
import { KeepHtmlPipe } from './keep-html';
import { TextEditPipe } from './text-edit/text-edit';
@NgModule({
    declarations: [KeepHtmlPipe,
    CapitalizeHtmlPipe,
    TextEditPipe],
    imports: [],
    exports: [KeepHtmlPipe,
    CapitalizeHtmlPipe,
    TextEditPipe]
})
export class PipesModule {}
