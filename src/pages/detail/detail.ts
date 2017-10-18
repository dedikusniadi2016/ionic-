import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { Post_id} from '../../providers/providers'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  getdata: any;
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,public post_id: Post_id ) {

    this.getdata = navParams.get('post_id') || post_id.defaultItem;


  }

}
