import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../index.paginas";
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  salir(){
  	this.navCtrl.push(TabsPage);
  }
launchDialer(n:string){
        this.callNumber.callNumber(n, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
}
}
