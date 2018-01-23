import { CapitalizeHtmlPipe } from './capitalize-html';
import { NgModule } from '@angular/core';
import { KeepHtmlPipe } from './keep-html';
@NgModule({
    declarations: [KeepHtmlPipe,
    CapitalizeHtmlPipe],
    imports: [],
    exports: [KeepHtmlPipe,
    CapitalizeHtmlPipe]
})
export class PipesModule {}
