import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudAction } from 'apps/ecommerce/src/app/commons/enums/crud.enum';
import { Motherboard } from 'apps/ecommerce/src/app/commons/interfaces/motherboard.interface';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';



@Component({
  selector: 'app-motherboard-list',
  templateUrl: './motherboard-list.component.html',
  styleUrls: ['./motherboard-list.component.css']
})
export class MotherboardListComponent implements OnInit {
  @Input() nombreHijoListado:string = 'Listado es un componente hijo';
  @Output() cambioNombreHijoEmitter = new EventEmitter<string>();

  @Input() accionCrudListado: CrudAction;
  @Output() accionCrudListadoEmitter = new EventEmitter<CrudAction>();


  contadorHijo: number = 0;

  motherboards: Motherboard[] = [];

  constructor(private motherboardsServices: MotherboardsHttpService) { }

  ngOnInit(): void {
    this.motherboardsServices.getAll().subscribe(

      data => this.motherboards = data

    )
  }

  iralaPlantilla(id:number) {
    console.log(id);
    this.motherboardsServices.listadoActivo = false;
  }


  gotoEdit(id:number) {
    console.log(id);
    this.accionCrudListado = CrudAction.Update;
    this.accionCrudListadoEmitter.emit( this.accionCrudListado);
  }

  gotoDelete(id:number) {
    console.log(id);
    this.accionCrudListado = CrudAction.Delete;
    this.accionCrudListadoEmitter.emit( this.accionCrudListado);
  }



  cambiarNombreHijo(): void {
    this.nombreHijoListado = 'nombre cambiado desde el listado hijo: ' + this.contadorHijo;
    this.cambioNombreHijoEmitter.emit( this.nombreHijoListado );
    this.contadorHijo++;
  }
}
