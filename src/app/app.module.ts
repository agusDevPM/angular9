import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { DataService } from './data.service';

import { TablaDetalleComponent } from './tabla-detalle/tabla-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    TablaDetalleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
