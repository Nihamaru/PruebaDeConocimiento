import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Aeronave } from './Aeronave'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { 
    console.log("¡servicio Datos funcionando!")
  }



obtenerDatos(){
    return this.http.get<Aeronave[]>("./assets/datos.json")
}

}
