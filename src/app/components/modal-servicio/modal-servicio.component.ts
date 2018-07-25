import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.component.html',
  styleUrls: ['./modal-servicio.component.css']
})
export class ModalServicioComponent implements OnInit {

  @Output() onSuccess = new EventEmitter();

  public title = "Nuevo servicio";
  public forma = new FormGroup({
    'empresa': new FormControl('', Validators.required),
    'domicilio': new FormControl('', Validators.required),
    'proxVencimiento': new FormControl('', Validators.required),
    'montoAnterior': new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  public onSubmit()
  {
    this.onSuccess.emit();
  }

}
