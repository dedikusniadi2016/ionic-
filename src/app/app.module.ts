import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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

import {DetailPage} from '../pages/detail/detail';
import {DetailBisnisPage} from '../pages/detail-bisnis/detail-bisnis';
import {DetailFotoPage} from '../pages/detail-foto/detail-foto';

import {DetailGadgetPage} from '../pages/detail-gadget/detail-gadget';

import {DetailJabarPage} from '../pages/detail-jabar/detail-jabar';
import {DetailNasionalPage} from '../pages/detail-nasional/detail-nasional';
import {DetailOlahragaPage} from '../pages/detail-olahraga/detail-olahraga';
import {DetailOtomotifPage} from '../pages/detail-otomotif/detail-otomotif';
import {DetailVideoPage} from '../pages/detail-video/detail-video';
import {DetailWisataPage} from '../pages/detail-wisata/detail-wisata';


import { CacheModule } from 'ionic-cache';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    OtomotifPage,
    GadgetPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    JabarPage,
    DetailPage,
    DetailBisnisPage,
    DetailFotoPage,
    DetailJabarPage,
    DetailNasionalPage,
    DetailOlahragaPage,
    DetailOtomotifPage,
    DetailVideoPage,
    DetailGadgetPage,
    DetailWisataPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NasionalPage,
    BisnisPage,
    WisataPage,
    OtomotifPage,
    GadgetPage,
    OlahragaPage,
    VideoPage,
    FotoPage,
    JabarPage,
    DetailPage,
    DetailBisnisPage,
    DetailFotoPage,
    DetailJabarPage,
    DetailNasionalPage,
    DetailOlahragaPage,
    DetailOtomotifPage,
    DetailVideoPage,
    DetailGadgetPage,
    DetailWisataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
