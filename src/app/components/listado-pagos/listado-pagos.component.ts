import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-listado-pagos',
  templateUrl: './listado-pagos.component.html',
  styleUrls: ['./listado-pagos.component.css']
})
export class ListadoPagosComponent implements OnInit {

  public rutaImg = environment.rutaImg;
  private idServicio: number;
  public arrFacturas = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private httpService: HttpService) { }

  ngOnInit() {
    this.recibirParametro();
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
        this.rutaImg += data[0].rutaImagen;
        // console.log(data);
      }
    )
  }

}
