import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the BisnisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bisnis',
  templateUrl: 'bisnis.html',
})
export class BisnisPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getBisnis();
  }

  getBisnis() {
    this.restProvider.getBisnis()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
