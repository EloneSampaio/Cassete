import { Component, ViewChild } from '@angular/core';
//import { Content } from 'ionic-angular';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  showSearchbar: boolean = false;
  //@ViewChild(Content) content: Content;

  
  items: any;

	filtereditems:any;
	searchTerm: string = '';

  constructor() {
    this.items = [
      {title: 'one'},
      {title: 'two'},
      {title: 'three'},
      {title: 'four'},
      {title: 'five'},
      {title: 'six'}
      ];
      this.filtereditems=[];
  }

  // toggleSearchbar() {
  //   this.showSearchbar = !this.showSearchbar;
  //   //this.content.resize();
  // }

  filterItems(){
		console.log(this.searchTerm);
		this.filtereditems = this.items.filter((item) => {
			return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
		});    

	}

}
