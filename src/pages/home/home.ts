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
    this.getheadlinebaru();
  }

  getheadlinebaru() {
    this.restProvider.getheadlinebaru()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }


  // getHeadline() {
  //   this.restProvider.getheadlinebaru()
  //     .then(data => {
  //       this.users = data;
  //       console.log(this.headline);
  //     });
  // }


}
