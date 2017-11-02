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
  headliness:any;
  headlines : any;
  headlinesecond : any;
  headlinethree : any;
  headlinefour : any;
  headlinefive : any;
  headlinesix : any;
  headlineseven : any;
  headlineeight : any;
  headlinenine : any;
  headlineten : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getHeadline();
    this.getHeadlinebaru();
    this.getheadlinesecond();
    this.getheadlinethree();
    this.getheadlinefour();
    this.getheadlinefive();
    this.getheadlinesix();
    this.getheadlineeight();
    this.getheadlinenine();
    this.getheadlineten();
  }

  openNavDetailsPage(headline) {
    this.navCtrl.push(DetailPage, { itemHeadline: headline })
  }

  getHeadline() {
    this.restProvider.getHeadline()
      .then(data => {
        this.headliness = data;
        console.log(this.headliness);
      });
  }


  getHeadlinebaru() {
    this.restProvider.getHeadlinebaru()
      .then(data => {
        this.headlines = data;
        console.log(this.headlines);
      });
  }

  getheadlinesecond() {
    this.restProvider.getheadlinesecond()
    .then(data => {
      this.headlinesecond = data;
      console.log(this.getheadlinesecond);
    });
  }

  getheadlinethree(){
    this.restProvider.getheadlinethree()
    .then(data => {
      this.headlinethree = data;
      console.log(this.headlinethree);
    });
  }

  getheadlinefour() {
    this.restProvider.getheadlinefour()
    .then(data => {
      this.headlinefour = data;
      console.log(this.headlinefour);
    });
  }

  getheadlinefive() {
    this.restProvider.getheadlinefive()
    .then(data => {
      this.headlinefive = data;
      console.log(this.headlinefive);
    });
  }

  getheadlinesix() {
    this.restProvider.getheadlinesix()
    .then(data => {
      this.headlinesix = data;
      console.log(this.headlinesix);
    });
  }

  getheadlineseven() {
    this.restProvider.getheadlineseven()
    .then(data => {
      this.headlineseven = data;
      console.log(this.headlineseven);
    });
  }

  getheadlineeight() {
    this.restProvider.getheadlineeight()
    .then(data => {
      this.headlineeight = data;
      console.log(this.headlineeight);
    });
  }

  getheadlinenine() {
    this.restProvider.getheadlinenine()
    .then(data => {
      this.headlinenine = data;
      console.log(this.headlinenine);
    });
  }

  getheadlineten() {
    this.restProvider.getheadlineten()
    .then(data => {
      this.headlineten = data;
      console.log(this.headlineten);
    });
  }
}
