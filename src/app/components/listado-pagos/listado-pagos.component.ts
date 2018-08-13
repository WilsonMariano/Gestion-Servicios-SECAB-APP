import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-listado-pagos',
  templateUrl: './listado-pagos.component.html',
  styleUrls: ['./listado-pagos.component.css']
})
export class ListadoPagosComponent implements OnInit {

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
        // console.log(data);
        this.traerFacturas();
      }
    )
  }

  private traerFacturas()
  {
    this.httpService.traer('factura-paga', this.idServicio).subscribe(
      data =>{
        this.arrFacturas = data;
        console.log(this.arrFacturas);
      }
    )
  }

}
