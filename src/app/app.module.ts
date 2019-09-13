import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Router } from '@angular/router';

import { DatosService } from './datos.service'

import { AppComponent } from './app.component';
import { TransformacionComponent } from './transformacion/transformacion.component';
import { DatosComponent } from './datos/datos.component';

 const rutas: Route[] =[
    {path: '', component: DatosComponent},
    {path: 'transformacion', component: TransformacionComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    TransformacionComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
