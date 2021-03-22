import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users'

import { UserdetailPage } from '../userdetail/userdetail';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  
  userList: any[] = Array();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public users: UsersProvider
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    
    // Se solicitan ambas páginas debido a que cada una recupera muy poca 
    // data y necesitaba llenar las lista.
    
    this.users.getJson("https://reqres.in/api/users?page=1").subscribe((res: any) => {
      this.userList.push(...res.data);
      console.log("%cLoading data...", "color: red");
    });
    
    this.users.getJson("https://reqres.in/api/users?page=2").subscribe((res: any) => {
      this.userList.push(...res.data);
      console.log("%cLoading data...", "color: red");
    });
  }
  
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    
    // Al recibir el evento de que se llegó al final de la lista, esta es 
    // llenada nuevamente haciendo otra solicitud de datos.
    
    // Claramente se debió llevar un control de las páginas descargadas para 
    // así hacer una descarga consecutiva, página por página, aprovechando que 
    // la data suministra el número total de páginas, pero la API suministrada 
    // solo entrega 12 items.

    this.users.getJson("https://reqres.in/api/users?page=2").subscribe((res: any) => {
      this.userList.push(...res.data);
      console.log("%cLoading data...", "color: red");
      infiniteScroll.complete();
    });
  }
  
  public showUser(event, user) {
    console.log(user);
    this.navCtrl.push(UserdetailPage, {
      user: user
    });
  }

}
