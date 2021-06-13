import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProcessorCreateView } from './views/processors/processor-create/processor-create.view';
import { ReactiveFormsModule } from '@angular/forms';
import { MotherboardCreateView } from './views/motherboards/motherboard-create/motherboard-create.view';
import { ProcessorDeleteView } from './views/processors/processor-delete/processor-delete.view';
import { ProcessorUpdateView } from './views/processors/processor-update/processor-update.view';
import { MotherboardUpdateView } from './views/motherboards/motherboard-update/motherboard-update.view';
import { MotherboardDeleteView } from './views/motherboards/motherboard-delete/motherboard-delete.view';
import { MotherboardPlantillaComponent } from './views/motherboards/components/motherboard-plantilla/motherboard-plantilla.component';
import { MotherboardListComponent } from './views/motherboards/components/motherboard-list/motherboard-list.component';


@NgModule({
  declarations: [AdminComponent, ProcessorCreateView, MotherboardCreateView, ProcessorDeleteView, ProcessorUpdateView, MotherboardUpdateView, MotherboardDeleteView, MotherboardPlantillaComponent, MotherboardListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
