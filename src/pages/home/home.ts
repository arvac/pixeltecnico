import { Component } from '@angular/core';
import {ToastController, NavController,App,Platform ,AlertController,Events } from 'ionic-angular';
import { ProductoPage } from "../producto/producto";
import{ProductosProvider}from "../../providers/productos/productos";
import { CarritoProvider } from "../../providers/carrito/carrito";
import { UsuarioService } from "../../providers/usuario/usuario";
import { LoginPage } from "../index.paginas";
declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isValid=true;
  productoPage = ProductoPage;
  constructor(public platform: Platform,public app:App,public navCtrl: NavController,public _ps:ProductosProvider,private _cs:CarritoProvider
   ,public toastCtrl:ToastController ,private _us:UsuarioService,public alert:AlertController,public events: Events) {
 
}
  siguiente_pagina(infiniteScroll){
    this._ps.cargar_todos().then(()=>{infiniteScroll.complete();  })


  }
  logout(){
   this.app.getRootNav().setRoot(LoginPage);
    this._us.cerrar_sesion();
 
  }
  ver(){
    if(!this.platform.is("cordova")){
      //this.mostra_toast(" no es un dispositivo");
      return;
     }else{ //this.mostra_toast("es un android");return;

   }
   
    }
 private mostra_toast(texto:string){
    this.toastCtrl.create({
      message:texto,
      duration :2500
    }).present();
  }
 
}
