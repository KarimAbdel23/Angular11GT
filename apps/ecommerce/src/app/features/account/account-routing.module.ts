import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountView } from './views/account/account.view';
import { FavoritesView } from './views/favorites/favorites.view';
import { OpinionsView } from './views/opinions/opinions.view';
import { OrdersView } from './views/orders/orders.view';
import { ProfileView } from './views/profile/profile.view';

const routes: Routes = [
  { path: '', component: AccountView },
  { path: 'pedidos', component: OrdersView },
  { path: 'favoritos', component: FavoritesView },
  { path: 'perfil', component: ProfileView },
  { path: 'opiniones', component: OpinionsView }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
