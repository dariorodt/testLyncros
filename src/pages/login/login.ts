import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  /**
   * Login simulado
   */
  login() {
    if(this.username == "username123") {
      if(this.password == "12345678") {
        // alert('Access granted');
        
        this.navCtrl.setRoot(DashboardPage);
        
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('Incorrect Username');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
