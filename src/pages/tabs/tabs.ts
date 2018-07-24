import { Component } from '@angular/core';
import { Platform,IonicPage, NavController, NavParams ,App,ToastController,ViewController} from 'ionic-angular';
import { HomePage, CategoriasPage, OrdenesPage,LoginPage } from "../index.paginas";
import { Network } from '@ionic-native/network';
import {ErrorRedPage}from '../error-red/error-red'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
constructor(public viewCtrl:ViewController ,public platform:Platform,private network: Network, public toastCtrl:ToastController,public navCtrl: NavController,
              public navParams: NavParams,public app:App) {
 
 this.network.onConnect().subscribe(data => {
   console.log(data)
   //this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
 
  this.network.onDisconnect().subscribe(data => {
    console.log(data)
    this.displayNetworkUpdate(data.type);
       
  }, error => console.error(error));
    
  }
  displayNetworkUpdate(connectionState: string){
  let networkType = this.network.type;
  this.navCtrl.push(ErrorRedPage);
  }
 
  tab1 = HomePage;
  tab2 = CategoriasPage;
  tab3 = OrdenesPage;
  tab4 ="";


}
