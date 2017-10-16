import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the GadgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gadget',
  templateUrl: 'gadget.html',
})
export class GadgetPage {
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getOtomotif();
  }

  getOtomotif() {
    this.restProvider.getOtomotif()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}

