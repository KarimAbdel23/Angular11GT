import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';

@Component({
  templateUrl: './motherboard-create.view.html',
  styleUrls: ['./motherboard-create.view.css']
})
export class MotherboardCreateView implements OnInit {


  motherboardForm: FormGroup;

  constructor( private motherboardService: MotherboardsHttpService  ) {
    this.motherboardForm = new FormGroup({
      SKU: new FormControl(null, Validators.required),
      Chipset: new FormControl(null, [Validators.required, Validators.min(3)]),
      Procesador: new FormControl(),
      Modelo: new FormControl(),
      Socket: new FormControl(),
      Marca: new FormControl(),
      TipoMemoria: new FormControl(),
      MemoriaMaxima: new FormControl(),
      Descripcion: new FormControl(),
      Aviso: new FormControl(),
      Piezas: new FormControl(),
      PrecioAnterior: new FormControl(),
      Precio: new FormControl(),
      CostoEnvio: new FormControl(),
      Porcentaje: new FormControl(),
      ValidoHasta: new FormControl(),
      Logo: new FormControl(),
      ImagenS: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  saveMotherboard(): void {
    this.motherboardService.save(this.motherboardForm.value).subscribe (
      console.log
    )
  }

}
