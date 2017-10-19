import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getOlahraga();
    this.getolahragaheadline();
  }

  getOlahraga() {
    this.restProvider.getOlahraga()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getolahragaheadline() {
    this.restProvider.getolahragaheadline()
    .then(data => {
      this.headlines = data;
      console.log(this.headlines);
    });
  }

}
