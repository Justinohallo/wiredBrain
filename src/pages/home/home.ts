import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';



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
loggedIn: any;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    this.logPage= 'LoginPage'
    
    this.afAuth.auth.onAuthStateChanged( user => {
      if (user) {
        this.loggedIn = user.email
      }
    })
  }

}
