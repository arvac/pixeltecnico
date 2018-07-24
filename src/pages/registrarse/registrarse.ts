import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,LoadingController } from 'ionic-angular';

import { RegistroUsuarioProvider } from "../../providers/registro-usuario/registro-usuario";
import { LoginPage } from "../index.paginas";
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  correo:string = "";
  contrasena:string = "";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:RegistroUsuarioProvider,public loadingCtrl:LoadingController) {

  }

  ingresar()
  {
                  let loading = this.loadingCtrl.create({
                        spinner: 'dots',
                        content: 'Cargando espere por favor ...'
                      });

                      loading.present();

                      setTimeout(() => {

                        //registra
                         this._us.ingresar( this.correo, this.contrasena )
                         .subscribe( ()=>{
         
                          })
                        this.viewCtrl.dismiss(true);

                      }, 5000);

                      setTimeout(() => {
                        loading.dismiss();
                      }, 5000);
   

  }
   salir(){
    this.navCtrl.push(LoginPage);
  }


}

