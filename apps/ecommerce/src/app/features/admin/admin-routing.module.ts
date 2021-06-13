import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MotherboardCreateView } from './views/motherboards/motherboard-create/motherboard-create.view';
import { MotherboardDeleteView } from './views/motherboards/motherboard-delete/motherboard-delete.view';
import { MotherboardUpdateView } from './views/motherboards/motherboard-update/motherboard-update.view';
import { ProcessorCreateView } from './views/processors/processor-create/processor-create.view';
import { ProcessorDeleteView } from './views/processors/processor-delete/processor-delete.view';
import { ProcessorUpdateView } from './views/processors/processor-update/processor-update.view';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path : 'alta-procesador',component: ProcessorCreateView },
      { path : 'modifica-procesador',component: ProcessorUpdateView },
      { path : 'baja-procesador',component: ProcessorDeleteView },
      { path : 'alta-tarjeta-madre',component: MotherboardCreateView },
      { path : 'modifica-tarjeta-madre',component: MotherboardUpdateView },
      { path : 'baja-tarjeta-madre',component: MotherboardDeleteView }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
