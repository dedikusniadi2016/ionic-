import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the WisataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html',
})
export class WisataPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getWisata();
  }

  getWisata() {
    this.restProvider.getWisata()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
