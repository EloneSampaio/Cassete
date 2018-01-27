import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor(public inAppBrowser: InAppBrowser) {
    console.log('FooterComponent foi excutado ');
  }

  paginaFacebook(){
    this.inAppBrowser.create(
      `https://facebook.com`,
      '_blank'
    );
  }

  paginaInsta(){
    this.inAppBrowser.create(
      `https://instagram.com/mr_dorosario`,
      '_blank'
    );
  }
  // paginaTwitter(){
  //   this.inAppBrowser.create(
  //     `https://twitter.com`,
  //     '_blank'
  //   );
  // }

}
