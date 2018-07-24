import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrorRedPage } from './error-red';

@NgModule({
  declarations: [
    ErrorRedPage,
  ],
  imports: [
    IonicPageModule.forChild(ErrorRedPage),
  ],
})
export class ErrorRedPageModule {}
