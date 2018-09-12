import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-listado-pagos',
  templateUrl: './listado-pagos.component.html',
  styleUrls: ['./listado-pagos.component.css']
})
export class ListadoPagosComponent implements OnInit {

  public rutaImg = environment.rutaImg;
  private idServicio: number;
  public arrFacturas = [];
  public servicio;

  constructor(
    private activateRoute: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.recibirParametro();
    this.traerDatosServicio();
  }


  private recibirParametro()
  {
    this.activateRoute.params.subscribe(
      data =>{
        this.idServicio = data['id'];
        this.traerFacturas();

      }
    )
  }

  private traerFacturas()
  {
    this.httpService.traer('factura-paga', this.idServicio).subscribe(
      data =>{
        this.arrFacturas = data;
        setTimeout(() =>  this.spinner.hide(), 500);
      }
      ,
      err => setTimeout(() =>  this.spinner.hide(), 500)

    )
  }

  private traerDatosServicio()
  {
    this.httpService.traer('factura', this.idServicio).subscribe(
      data =>
      {
        this.servicio = data[0];
        this.rutaImg += this.servicio.rutaImagen;
        console.log(data);
      }
    )
  }

}
