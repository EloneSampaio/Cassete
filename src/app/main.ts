import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;
import "froala-editor/js/froala_editor.pkgd.min.js";

import {enableProdMode} from "@angular/core";

 
//enableProdMode();
// Ativar o modo de produção a menos que seja executado localmente
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
