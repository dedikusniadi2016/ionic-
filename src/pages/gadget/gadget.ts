import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-gadget',
  templateUrl: 'gadget.html',
})
export class GadgetPage {
  users: any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getGadget();
    this.getgadgetheadline();
  }

  getGadget() {
    this.restProvider.getGadget()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getgadgetheadline() {
    this.restProvider.getgadgetheadline()
    .then(data => {
      this.headlines = data;
      console.log(this.headlines);
    });
  }

}

