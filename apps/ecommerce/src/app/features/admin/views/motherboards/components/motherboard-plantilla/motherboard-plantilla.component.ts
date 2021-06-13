import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudAction } from 'apps/ecommerce/src/app/commons/enums/crud.enum';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';

@Component({
  selector: 'app-motherboard-plantilla',
  templateUrl: './motherboard-plantilla.component.html',
  styleUrls: ['./motherboard-plantilla.component.css']
})
export class MotherboardPlantillaComponent implements OnInit {

  @Input() accionCrudPlantilla: CrudAction;
  @Output() accionCrudPlantillaEmitter = new EventEmitter<CrudAction>();

  motherboardForm: FormGroup;

  constructor( private motherboardService: MotherboardsHttpService  ) {
    this.motherboardForm = new FormGroup({
      SKU: new FormControl('HOLA MUNDO', Validators.required)
      /*
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
      ImagenS: new FormControl()*/
    });
  }

  ngOnInit(): void {
    console.log('MotherboardPlantillaComponent -- ngOnInit');
    this.setValues(1);
  }


  setValues(id:number): void {
    console.log('MotherboardPlantillaComponent -- setValues');
    this.motherboardService.getOne(id).subscribe(

      {
        next: (data:any) =>  {
                   console.log('Observer got a next value: ');
                   this.motherboardForm.setValue({SKU: data.SKU});
                   this.motherboardForm.updateValueAndValidity();
                   console.log(data);
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
        complete: () => {
          /*
          this.motherboardForm = new FormGroup({
            SKU: new FormControl('FUNCIONA', Validators.required)
          });
          */
          //this.motherboardForm.updateValueAndValidity();
           console.log('Observer got a complete notification')
        }
      }

      /*
      next =>               console.log
          ,
      complete => {
        this.motherboardForm.setValue({SKU: complete.SKU});
        this.motherboardForm.updateValueAndValidity();
        }*/
    )
  }

  saveMotherboard(): void {
    this.motherboardService.save(this.motherboardForm.value).subscribe (
      console.log
    )
  }

  updateMotherboard(): void {
    this.motherboardService.update(this.motherboardForm.value).subscribe (
      console.log
    )
  }

  deleteMotherboard(): void {
    this.motherboardService.delete(this.motherboardForm.value).subscribe (
      console.log
    )
  }

  regresar(): void {
    this.accionCrudPlantilla = CrudAction.Read;
    this.accionCrudPlantillaEmitter.emit( this.accionCrudPlantilla);
  }




}
