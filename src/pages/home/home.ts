import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  headline: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getHeadline();
    this.getHeadlinebaru();
  }

  getHeadlinebaru() {
    this.restProvider.getHeadlinebaru()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getHeadline() {
    this.restProvider.getHeadline()
      .then(data => {
        this.users = data;
        console.log(this.headline);
      });
  }




}
