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
  headliness:any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public post_id : Post_id) {
    this.getHeadline();
    this.getHeadlinebaru();

  }

  openNavDetailsPage(headline) {
    this.navCtrl.push(DetailPage, { itemHeadline: headline })
  }

  getHeadline() {
    this.restProvider.getHeadline()
      .then(data => {
        this.headliness = data;
        console.log(this.headliness);
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
