import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
/**
 * Generated class for the NasionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nasional',
  templateUrl: 'nasional.html',
})
export class NasionalPage {

  users: any;
  headlines: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {

    this.getNasional();
    this.getkabarnasionalheadline();

  }

  getNasional() {
    this.restProvider.getNasional()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getkabarnasionalheadline() {
    this.restProvider.getkabarnasionalheadline()
      .then(data => {
        this.headlines = data;
        console.log(this.headlines);
      });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad NasionalPage');
  }

}
