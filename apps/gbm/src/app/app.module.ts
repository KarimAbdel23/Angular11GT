import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeView } from './views/home/home.view';
import { ContactView } from './views/contact/contact.view';
import { HelpView } from './views/help/help.view';
import { NotFoundView } from './views/not-found/not-found.view';

@NgModule({
  declarations: [
    AppComponent,
    HomeView,
    ContactView,
    HelpView,
    NotFoundView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
