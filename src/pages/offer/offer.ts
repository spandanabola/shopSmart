import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  jsonData = '';

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.jsonData = navParams.get('item');
    console.log('My name', this.jsonData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
  }

}
