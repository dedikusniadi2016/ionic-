import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NasionalPage } from '../pages/nasional/nasional';
import { BisnisPage } from '../pages/bisnis/bisnis';
import { WisataPage } from '../pages/wisata/wisata';
import { OtomotifPage } from '../pages/otomotif/otomotif';
import { GadgetPage } from '../pages/gadget/gadget';
import { OlahragaPage } from '../pages/olahraga/olahraga';
import { VideoPage } from '../pages/video/video';
import { FotoPage } from '../pages/foto/foto';
import { JabarPage } from '../pages/jabar/jabar';
import { CacheService } from "ionic-cache";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public cache: CacheService) {

    cache.setDefaultTTL(60 * 60 * 12);
    cache.setOfflineInvalidate(false);

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Kabar Jabar', component: JabarPage },
      { title: 'Kabar Nasional', component: NasionalPage },
      { title: 'Bisnis', component: BisnisPage },
      { title: 'Wisata', component: WisataPage },
      { title: 'Otomotif', component: OtomotifPage },
      { title: 'Gadget', component: GadgetPage },
      { title: 'Olahraga', component: OlahragaPage },
      { title: 'Foto', component: FotoPage },
      { title: 'Video',component: VideoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
