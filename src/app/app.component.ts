import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = HomePage;

  constructor(platform: Platform, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}

