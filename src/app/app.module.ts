import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarritoProvider } from '../providers/carrito/carrito';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioService } from '../providers/usuario/usuario';
import { CallNumber } from '@ionic-native/call-number';
import { Network } from '@ionic-native/network';
//pipes
import {ImagenPipe }from "../pipes/imagen/imagen";
// Paginas
  import {  CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage ,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage} from "../pages/index.paginas";
    import { IonicStorageModule } from '@ionic/storage';
    import { AjustesService } from '../providers/ajustes/ajustes';
import { RegistroUsuarioProvider } from '../providers/registro-usuario/registro-usuario';
import { NetworkProvider } from '../providers/network/network';
    
@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    PorCategoriasPage,
    TabsPage,
    ProductoPage,BusquedaPage,Introduccion,RegistrarsePage,AboutPage,ErrorRedPage
  ],
  providers: [
    StatusBar,
    SplashScreen, CallNumber,Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarritoProvider,
    ProductosProvider,
    UsuarioService,
    AjustesService,
    RegistroUsuarioProvider,
    NetworkProvider
  ]
})
export class AppModule {}
