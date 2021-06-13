import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { OrdersView } from './views/orders/orders.view';
import { FavoritesView } from './views/favorites/favorites.view';
import { ProfileView } from './views/profile/profile.view';
import { OpinionsView } from './views/opinions/opinions.view';
import { AccountView } from './views/account/account.view';


@NgModule({
  declarations: [OrdersView, FavoritesView, ProfileView, OpinionsView, AccountView],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
