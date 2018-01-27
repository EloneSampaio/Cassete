import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { IonicModule } from 'ionic-angular';
import { ResultadoSearchComponent } from './resultado-search/resultado-search';

@NgModule({
	declarations: [ HeaderComponent, FooterComponent,
    ResultadoSearchComponent ],
	imports: [IonicModule],
	exports: [ HeaderComponent, FooterComponent,
    ResultadoSearchComponent ]
})
export class ComponentsModule {}
