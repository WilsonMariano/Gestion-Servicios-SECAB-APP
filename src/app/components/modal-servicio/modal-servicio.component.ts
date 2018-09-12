import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
declare var $;

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.component.html',
  styleUrls: ['./modal-servicio.component.css']
})
export class ModalServicioComponent implements OnInit {

  @Output() onSuccess = new EventEmitter();
  @Input() objetoEditar = null;

  public arrEmpresas = [];
  public editando: boolean;
  public forma = new FormGroup({
    'idEmpresa': new FormControl('', Validators.required),
    'domicilio': new FormControl('', Validators.required),
    'proxVencimiento': new FormControl('', Validators.required),
    'datosCuenta': new FormControl('') 
  });

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.traerEmpresas();  
  }

  ngOnChanges()
  {
    if(this.objetoEditar != null)
    {
      this.editando = true;
      this.forma.get('idEmpresa').setValue(this.objetoEditar.idEmpresa);
      this.forma.get('domicilio').setValue(this.objetoEditar.domicilio);
      this.forma.get('proxVencimiento').setValue(this.objetoEditar.proxVencimiento);
      this.forma.get('datosCuenta').setValue(this.objetoEditar.datosCuenta);
    }

    else
      this.editando = false;

  }

  public onSubmit()
  {
    if(!this.editando)
    {
      let unaFactura = {
        'idEmpresa': this.forma.get('idEmpresa').value,
        'domicilio': this.forma.get('domicilio').value,
        'proxVencimiento': this.forma.get('proxVencimiento').value,
        'datosCuenta': this.forma.get('datosCuenta').value
      }

      this.httpService.insertarUno('factura', unaFactura).subscribe(
        data =>{
          this.onSuccess.emit();
          this.forma.reset();
          $('#modalServicio').modal('hide');
          console.log("insertado");
        })
    }
    else
    {
      let unaFactura = {
        'idEmpresa': this.forma.get('idEmpresa').value,
        'domicilio': this.forma.get('domicilio').value,
        'proxVencimiento': this.forma.get('proxVencimiento').value,
        'datosCuenta': this.forma.get('datosCuenta').value,
        'id': this.objetoEditar.idFactura
      }

      this.httpService.editarUno('factura', unaFactura).subscribe(
        data =>{
          this.onSuccess.emit();
          this.forma.reset();
          $('#modalServicio').modal('hide');
          console.log("editado");
        })
    }
  }

  private traerEmpresas()
  {
    this.httpService.traerTodo('empresa').subscribe(
      data => {
        this.arrEmpresas = data;
        console.log(data);
      }
    )
  }


}
