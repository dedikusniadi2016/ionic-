import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the OlahragaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-olahraga',
  templateUrl: 'olahraga.html',
})
export class OlahragaPage {
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getOlahraga();
  }

  getOlahraga() {
    this.restProvider.getOlahraga()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
