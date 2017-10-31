import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetailVideoPage } from '../detail-video/detail-video';


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
  headlines : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getVideo();
    this.getvideoheadline();
  }

  getVideo() {
    this.restProvider.getVideo()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getvideoheadline() {
    this.restProvider.getvideoheadline()
    .then(data => {
      this.headlines = data;
      console.log(this.headlines);
    });
  }

  openNavDetailsPage(headline) {
    this.navCtrl.push(DetailVideoPage, { itemHeadline: headline })
  }

}
