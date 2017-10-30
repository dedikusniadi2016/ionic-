import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Post_id} from '../../providers/providers';
import { Post_title } from '../../providers/providers';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public post_id: Post_id,public post_title: Post_title, public api: Api) {

    this.post_id = navParams.get('post_id') || post_id.defaultItem;
    this.post_title = navParams.get('post_title') || post_title.defaultItem;


  }
}
