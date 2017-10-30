import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Post_id } from '../../providers/providers';
import { Api } from '../../providers/api/api';

/**;;
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
  defaultItems: any;
  users: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public post_id: Post_id, public api: Api) {

    this.item = navParams.get('itemHeadline');
    console.log(this.item);


  }
}
