import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-bisnis',
  templateUrl: 'bisnis.html',
})
export class BisnisPage {

  users: any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getBisnis();
    this.getbisnisheadline();
  }

  getBisnis() {
    this.restProvider.getBisnis()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getbisnisheadline() {
    this.restProvider.getbisnisheadline()
    .then(data => {
      this.headlines = data;
      console.log(this.headlines);
    });
  }

}
