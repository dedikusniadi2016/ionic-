import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }

  openNavDetailsPage(post_id) {
    this.navCtrl.push(DetailPage,{post_id: post_id})
  }

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }



}
