import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the FotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getFoto();
  }

  getFoto() {
    this.restProvider.getFoto()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
