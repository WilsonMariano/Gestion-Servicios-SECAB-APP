import { Component, OnInit, Input } from '@angular/core';
// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
declare var $;

@Component({
  selector: 'app-modal-pagar-servicio',
  templateUrl: './modal-pagar-servicio.component.html',
  styleUrls: ['./modal-pagar-servicio.component.css']
})
export class ModalPagarServicioComponent implements OnInit{

  @Input() objetoPagar;

  public forma = new FormGroup({
    'fechaPago': new FormControl('', Validators.required),
    'montoPagado': new FormControl('', Validators.required),
    'proxVencimiento': new FormControl('', Validators.required),
    'rutaImagen' : new FormControl('', Validators.required),
    'vencActual': new FormControl('', Validators.required)
  });

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit()
  {
    // let ahora = new Date().getDay() +'/'+ (new Date().getMonth()+1) +'/'+ new Date().getFullYear();
    // console.log(ahora);
    
  }

  ngOnChanges() {    
    if(this.objetoPagar)
    {
      this.forma.get('rutaImagen').setValue(this.objetoPagar.rutaImagen);
      this.forma.get('vencActual').setValue(this.objetoPagar.proxVencimiento);
    }
  }

  public onSubmit()
  {
    this.httpService.insertarUno('factura-paga',
      {
        'idFactura': this.objetoPagar.idFactura,
        'montoPagado': this.forma.get('montoPagado').value,
        'fechaPago': this.forma.get('fechaPago').value,
        'proxVencimiento': this.forma.get('proxVencimiento').value
      }
    ).subscribe(data=>
    {
      console.log(data);
    });
  }





}
