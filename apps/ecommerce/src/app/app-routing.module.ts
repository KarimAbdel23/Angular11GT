import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareView } from './views/hardware/hardware.view';
import { HelpView } from './views/help/help.view';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { PortalView } from './views/portal/portal.view';
import { ProcessorsView } from './views/hardware/processors/processors.view';
import { ProcessorDetailView } from './views/hardware/processors/processor-detail/processor-detail.view';
import { IsAuthGuard } from './commons/guards/is-auth.guard';
import { MotherboardsView } from './views/hardware/motherboards/motherboards.view';
import { MotherboardDetailView } from './views/hardware/motherboards/motherboard-detail/motherboard-detail.view';

const  motherboardsChildren = [
  { path: 'tarjetas-madre', component: MotherboardsView },
  { path: 'tarjetas-madre/:id', component: MotherboardDetailView },
  //{ path: 'procesadores', component: ProcessorsView }
]

const routes: Routes = [
  {
    path: '',
    component: PortalView,
    children: [
      { path: 'inicio', component: HomeView },
      { path: 'componentes', component: HardwareView, children: motherboardsChildren },
      { path: 'componentes/procesadores', component: ProcessorsView },
      { path: 'componentes/procesadores/:id', component: ProcessorDetailView },
      { path: 'ayuda', component: HelpView }
    ]
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'comprar',
    loadChildren: () => import('./features/purchase/purchase.module').then(m => m.PurchaseModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canLoad: [IsAuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: NotFoundView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
