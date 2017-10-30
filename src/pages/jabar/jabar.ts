import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DetailJabarPage} from '../detail-jabar/detail-jabar';

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

    openNavDetailsPage(headline) {
    this.navCtrl.push(DetailJabarPage, { itemHeadline: headline })
  }

  getJabarHeadline() {
    this.restProvider.getJabarHeadline()
      .then(data => {
        this.headlines = data;
        console.log(this.headlines);
      });
  }

}



