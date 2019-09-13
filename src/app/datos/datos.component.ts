import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  datos=[]

  aeronaves = [];
  numeroTotalDeServicios =[];
  

  constructor(private datosService: DatosService){

    console.log("¡app.component funcionando!");

    this.datosService.obtenerDatos().subscribe(datos => {
      this.aeronaves = datos;

      //muestra de datos del archivo JSON en consola
      console.log("Datos del archivo JSON:"); 
      console.log(datos); 
      
      //Cantidad de servicios de cada Aeronave

      for (let i = 0; i < this.aeronaves.length; i++) {
        for (let j = 0; j < this.aeronaves[i].maintHistories.length; j++) {
        this.numeroTotalDeServicios[i] =+ this.aeronaves[i].maintHistories[j].maintTaskHistories.length;
        }
      }


    })  

   


  } 
  // obtener numeros en forma de array para usar contadores en las etiquetas

  arrayOne(n: number) {
    return Array(n);
  }

}
