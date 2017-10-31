import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the DetailVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-video',
  templateUrl: 'detail-video.html',
})
export class DetailVideoPage {

  defaultItems: any;
  users: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

    this.item = navParams.get('itemHeadline');
    console.log(this.item);


  }

}
