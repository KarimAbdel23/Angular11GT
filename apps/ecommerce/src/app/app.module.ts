import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeView } from './views/home/home.view';
import { HardwareView } from './views/hardware/hardware.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { HelpView } from './views/help/help.view';
import { PortalView } from './views/portal/portal.view';
import { ProcessorsView } from './views/hardware/processors/processors.view';
import { ProcessorDetailView } from './views/hardware/processors/processor-detail/processor-detail.view';
import { PurchaseModule } from './features/purchase/purchase.module';
import { HttpClientModule } from '@angular/common/http';
import { MotherboardsView } from './views/hardware/motherboards/motherboards.view';
import { MotherboardDetailView } from './views/hardware/motherboards/motherboard-detail/motherboard-detail.view';
import { YesnoPipe } from './commons/pipes/yesno.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    HardwareView,
    NotFoundView,
    HelpView,
    PortalView,
    ProcessorsView,
    ProcessorDetailView,
    MotherboardsView,
    MotherboardDetailView,
    YesnoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PurchaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


