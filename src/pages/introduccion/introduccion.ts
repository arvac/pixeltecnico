import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";

import { AjustesService }  from "../../providers/ajustes/ajustes";



@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class Introduccion {

  slides:any[] = [
    {
      title: "Hola.. Bienvenido!!!",
      description: "Esta <b>aplicación</b> nos ayudará a ofrecer y mejorar nuestros servicios!",
      image: "assets/img/smart.jpg",
    },
    {
      title: "¿Por qué elegir a Pixel?",
      description: "<b>Pixel</b> es el servicio técnico para telefonía celular con mayor trayectoria en Santo Domingo de los Tsáchila gracias a sus garantizados trabajos...",
      image: "assets/img/mano.jpg",
    },
    {
      title: "¿Que hace esta app?",
      description: "Esta aplicación nos ayudará a conocer más sobre nuestro clientes y automatizar nuestros servicios a manera de e-commerce !",
      image: "assets/img/red.jpg",
    }
  ];


  constructor(public navCtrl: NavController,
              private _ajustes: AjustesService) {
  }


  saltar_tutorial(){

    this._ajustes.ajustes.mostrar_tutorial = false;
    this._ajustes.guardar_storage();
    this.navCtrl.push( LoginPage );

  }




}
