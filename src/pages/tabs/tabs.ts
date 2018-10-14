import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = "Product";
  tab2Title = "Search";
  tab3Title = "Profile";
  jsonData: any;
  constructor(public navCtrl: NavController, public translateService: TranslateService, public navParams: NavParams) {
    this.jsonData = navParams.get('data');
    console.log('My name', this.jsonData);
  }

}
