import { Component } from '@angular/core';
import { Platform,  Events ,ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { TabsPage } from "../pages/index.paginas";
import { Introduccion } from "../pages/index.paginas";
import { LoginPage } from "../pages/index.paginas";

import { AjustesService } from "../providers/ajustes/ajustes";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Introduccion;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    , private _ajustes:AjustesService, public network: Network,public toastCtrl:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
          this._ajustes.cargar_storage()
            .then( ()=>{

              if( this._ajustes.ajustes.mostrar_tutorial ){
                this.rootPage = Introduccion;
              }else{
                this.rootPage = TabsPage;

              }
        })
    });

  }

}

