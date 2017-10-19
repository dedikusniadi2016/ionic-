import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-wisata',
  templateUrl: 'wisata.html',
})
export class WisataPage {

  users: any;
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getWisata();
    this.getwisataheadline();
  }

  getWisata() {
    this.restProvider.getWisata()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getwisataheadline() {
    this.restProvider.getwisataheadline()
    .then(data => {
      this.headlines = data;
      console.log(this.headlines);
    });
  }

}
