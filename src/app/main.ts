import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;
import "froala-editor/js/froala_editor.pkgd.min.js";

 


platformBrowserDynamic().bootstrapModule(AppModule);
