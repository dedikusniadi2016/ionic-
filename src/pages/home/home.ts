import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DetailPage} from '../detail/detail';

import {Post_id} from '../../providers/providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public post_id : Post_id) {
    this.getHeadline();
    this.getHeadlinebaru();

  }

  openNavDetailsPage(post_id) {
    this.navCtrl.push(DetailPage,{post_id: post_id})
  }

  getHeadline() {
    this.restProvider.getHeadline()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }


  getHeadlinebaru() {
    this.restProvider.getHeadlinebaru()
      .then(data => {
        this.headlines = data;
        console.log(this.headlines);
      });
  }


}
