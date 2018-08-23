import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menuData = [ 
  {title: 'Our menu', pic: 'assets/img/soup1.jpg', pushPage: 'MenuPage'},
  {title: 'Account', pic: 'assets/img/coffee-people3.jpg', pushPage: 'AccountPage'},
  {title: 'About Us', pic: 'assets/img/coffee6.jpg', pushPage: 'AboutPage'},
  {title: 'Locations', pic: 'assets/img/cafe2.jpg', pushPage: 'LocationsPage'}
];


logPage: any

  constructor(public navCtrl: NavController) {
    this.logPage= 'LoginPage'
  }

}
