import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private arrFacturas = [];
  public arrAuxiliar = [];
  public arrImgEmpresas = {
    "Edesur": {
      "ruta": "./assets/img/edesur.png"
    },
    "Metrogas": {
      "ruta": "./assets/img/metrogas.png"
    },
    "Cablevision": {
      "ruta": "./assets/img/cablevision.png"
    }
  }

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

}
