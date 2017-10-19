import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-jabar',
  templateUrl: 'jabar.html',
})
export class JabarPage {

  users: any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getJabar();
    this.getJabarHeadline();
  }

  getJabar() {
    this.restProvider.getJabar()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getJabarHeadline() {
    this.restProvider.getJabarHeadline()
      .then(data => {
        this.headlines = data;
        console.log(this.headlines);
      });
  }

}



