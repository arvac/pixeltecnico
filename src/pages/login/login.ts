import { Component } from '@angular/core';
import { Platform,NavController, NavParams, ViewController ,LoadingController,ToastController} from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import {RegistrarsePage} from "../registrarse/registrarse"
import { UsuarioService } from "../../providers/usuario/usuario";
import { Network } from '@ionic-native/network';
import {ErrorRedPage}from '../error-red/error-red'
declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  correo:string = "";
  contrasena:string = "";
  constructor(public platform:Platform ,public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService,public loadingCtrl:LoadingController,private network: Network, public toastCtrl:ToastController ) {
   
   this.network.onConnect().subscribe(data => {
    console.log(data)
   
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

  ingresar(){
  
 this.checkNetwork();

    this._us.ingresar( this.correo, this.contrasena )
            .subscribe( ()=>{

              if( this._us.activo() ){
 
              
               if( this._us.activo() ){
                //this.viewCtrl.dismiss(true);
              
              // this.navCtrl.push(TabsPage);
               
                    let loading = this.loadingCtrl.create({
                        spinner: 'dots',
                        content: '<div class="custom-spinner-container"><ion-spinner name="bubbles">Cargando espere porfavor...</ion-spinner></div>'
                      });

                      loading.present();

                      setTimeout(() => {

                      this.navCtrl.setRoot(TabsPage);
                      }, 5000);

                      setTimeout(() => {
                        loading.dismiss();
                      }, 5000);
               }
                
              }
          })

  }
  registrar(){

   this.navCtrl.setRoot(RegistrarsePage);
  }
checkNetwork() {
        this.platform.ready().then(() => {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN]  = 'conexion desconocida';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi conexion';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No tiene conexion';
           
             this.toastCtrl.create({
    message: `Medio de conexion actual es: ${networkState} `,
    duration: 7000
  }).present();

        });
    }
}

