import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import * as moment from 'moment';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private arrFacturas = [];
  public arrAuxiliar = [];
  public objetoEditar = null;

  public criterioBusqueda = 'empresa';
  public cadenaBuscar;

  constructor(private httpService: HttpService) 
  { }

  ngOnInit() {
    this.traerFacturas();
  }

  public traerFacturas()
  {
    this.httpService.traerTodo('factura').subscribe(
      data =>{
        this.arrFacturas = data;
        this.arrAuxiliar = data;
        console.log(data);
      }
    )
  }

  public calcularDifFechas(vencAproximado)
  {
    let vencimiento = moment(vencAproximado);
    let hoy = moment();
 
    return vencimiento.diff(hoy, 'days');
  }

  public onKeyPress()
  {
    this.arrAuxiliar = [];

    switch(this.criterioBusqueda)
    {
      case 'empresa':
        this.arrFacturas.forEach(element => {
          if(
              (<string>element['nombre']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
          )
          this.arrAuxiliar.push(element); 
        });
      break;
      case 'ubicacion':
        this.arrFacturas.forEach(element => {
          if(
              (<string>element['domicilio']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
          )
          this.arrAuxiliar.push(element); 
        });
      break;
      case 'vencimiento':
      this.arrFacturas.forEach(element => {
        if(
            (<string>element['proxVencimiento']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
        )
        this.arrAuxiliar.push(element); 
      });
    break;

    }
  }
}
