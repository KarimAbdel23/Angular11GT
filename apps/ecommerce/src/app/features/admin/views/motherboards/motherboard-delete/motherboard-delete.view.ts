import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudAction } from 'apps/ecommerce/src/app/commons/enums/crud.enum';
import { MotherboardsHttpService } from 'apps/ecommerce/src/app/services/motherboards-http.service';
import { Observable } from 'rxjs';
import { MotherboardPlantillaComponent } from '../components/motherboard-plantilla/motherboard-plantilla.component';

@Component({
  templateUrl: './motherboard-delete.view.html',
  styleUrls: ['./motherboard-delete.view.css']
})
export class MotherboardDeleteView implements OnInit {
  //isListado = false;
  nombreVista: string = 'nombre en la vista';
  contadorClick:number = 0;
  registroEliminado = false;
  mostrarListado = true;
  mostrarPlantilla = false;

  @ViewChild('app-motherboard-plantilla') motherboardPlantilla: MotherboardPlantillaComponent;

  accionCrudVista: CrudAction = CrudAction.Read;


  constructor(private motherboardService: MotherboardsHttpService) {  }

  ngOnInit(): void {
    //this.isListado = this.motherboardService.listadoActivo;
  }

  aceptDelete(id: number): void {
    this.motherboardService.delete(id).subscribe (
      data => this.registroEliminado = data
    )
  }


  returnList(): void {
    //this.isListado = this.motherboardService.listadoActivo = true;
  }

  cambiarNombre(): void {
    this.nombreVista = "Nombre vista modificado: " + this.contadorClick;
    this.contadorClick++;
  }

  cambiarEmitter(value:string): void {
    console.log(value);
    this.nombreVista = value + 'kar';
  }

  cambiarAccionCrud(value:CrudAction): void {
    this.accionCrudVista = value;

      switch (this.accionCrudVista) {
        case CrudAction.Create:
          break;
        case CrudAction.Read:
          this.mostrarListado = true;
          this.mostrarPlantilla = false;
          break;
        case CrudAction.Update:
        case CrudAction.Delete:
          this.mostrarListado = false;
          this.mostrarPlantilla = true;
          this.cargarDatosPlantilla();
          break;
        default:
          break;
      }
  }


  cargarDatosPlantilla() {
    console.log('MotherboardDeleteView -- cargarDatosPlantilla');
    //this.motherboardPlantilla.setValues(1);
  }

}
