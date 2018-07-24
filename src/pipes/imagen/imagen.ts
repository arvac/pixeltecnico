import { Pipe, PipeTransform } from '@angular/core';

import {URL_IMAGENES} from "../../config/url.servicios";
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform(codigo: string) {

    return "https://pixeltienda.000webhostapp.com/rest/rest/public/img/productos/"+ codigo +".jpg";
   
  }
}
