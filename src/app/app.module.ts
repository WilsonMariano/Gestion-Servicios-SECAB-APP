import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ROUTING } from './rutas.route';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ModalServicioComponent } from './components/modal-servicio/modal-servicio.component';
import { ModalPagarServicioComponent } from './components/modal-pagar-servicio/modal-pagar-servicio.component';
import { ListadoPagosComponent } from './components/listado-pagos/listado-pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ModalServicioComponent,
    ModalPagarServicioComponent,
    ListadoPagosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
