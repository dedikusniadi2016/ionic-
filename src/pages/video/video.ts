import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getVideo();
  }

  getVideo() {
    this.restProvider.getVideo()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

}
