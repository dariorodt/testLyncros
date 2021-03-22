import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  loginPage = LoginPage;
  dashboardPage = DashboardPage;

  constructor(public navCtrl: NavController) {

  }

}
