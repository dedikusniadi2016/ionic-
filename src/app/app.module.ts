import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';

import { NasionalPage } from '../pages/nasional/nasional';
import { BisnisPage } from '../pages/bisnis/bisnis';
import { WisataPage } from '../pages/wisata/wisata';
import { OtomotifPage } from '../pages/otomotif/otomotif';
import { GadgetPage } from '../pages/gadget/gadget';
import { OlahragaPage } from '../pages/olahraga/olahraga';
import { VideoPage } from '../pages/video/video';
import { FotoPage } from '../pages/foto/foto';
import { JabarPage } from '../pages/jabar/jabar';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    OtomotifPage,
    GadgetPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    JabarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    OtomotifPage,
    GadgetPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    JabarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
