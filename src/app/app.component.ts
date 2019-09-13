import { Component } from '@angular/core';
import { DatosComponent } from './datos/datos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("¡app.component funcionando!");

    }
  
 
}
