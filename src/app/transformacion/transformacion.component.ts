import { Component } from '@angular/core';
import { DatosService } from '../datos.service'

@Component({
  selector: 'app-transformacion',
  templateUrl: './transformacion.component.html',
  styleUrls: ['./transformacion.component.css']
})
export class TransformacionComponent {
  aeronaves = [];
  maintCmpActivity = [];
  maintHistories = [];
  machine = [];

  constructor(private datosService: DatosService){

    console.log("¡transformacion.component funcionando!")

    this.datosService.obtenerDatos().subscribe(datos => {
      this.aeronaves = datos;
      
      //Obteniendo el nodo maintCmpActivity[]

      for (let i = 0; i < this.aeronaves.length; i++) {
        for (let j = 0; j < this.aeronaves[i].maintHistories.length; j++) {
        this.maintCmpActivity[i] = this.aeronaves[i].maintHistories[j].maintCmpActivity;
        }
      }

      //Obteniendo el nodo maintHistories[]
      
      for (let i = 0; i < this.aeronaves.length; i++) {
        this.maintHistories[i] = this.aeronaves[i].maintHistories;
      }

      //Eliminando sub maintCmpActivity[] de maintHistories[]

      for (let i = 0; i < this.maintHistories.length; i++) {
        let objetoMaintHistories:Object = this.maintHistories[i];
        for (let j = 0; j < this.maintHistories[i].length; j++) {
          for (var m in objetoMaintHistories[j]) {
            
            if (m == "maintCmpActivity") {
                delete objetoMaintHistories[j].maintCmpActivity;
            }
            
          }
        }
        this.maintHistories[i] = objetoMaintHistories;
      }
      
      // agregando propiedad/nodo maintHistories[] al arreglo de objetos maintCmpActivity[]

      for (let i = 0; i < this.maintCmpActivity.length; i++) {
        this.maintCmpActivity[i].maintHistories = this.maintHistories[i];
      }
      
      //Obteniendo el nodo machine[]
      for (let i = 0; i < this.aeronaves.length; i++) {
        this.machine[i] = this.aeronaves[i];
      }
      
     

      //Eliminando sub maintHistories[] del nodo principal

      for (let i = 0; i < this.machine.length; i++) {
         
        for (var m in this.machine[i]) {
            
          if (m == "maintHistories") {
              delete this.machine[i].maintHistories;
          }
          
        }
          
      }
      
      //agregando propiedad/nodo machine[] al arreglo de objetos maintHistories[]
      for (let i = 0; i < this.maintCmpActivity.length; i++) {
        for (let j = 0; j < this.maintCmpActivity[i].maintHistories.length; j++) {
          this.maintCmpActivity[i].maintHistories[j].machine = this.machine[i];
        }
        
      }
      
     //muestra de datos transformados en la consola
      console.log("Datos transformados de archivo JSON:");
      console.log(this.maintCmpActivity);

      

    })  
    
    
    

  }

  
  // obtener numeros en forma de array para usar contadores en las etiquetas

  arrayOne(n: number) {
    return Array(n);
  }
  

}
