import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactView } from './views/contact/contact.view';
import { HelpView } from './views/help/help.view';
import { HomeView } from './views/home/home.view';
import { NotFoundView } from './views/not-found/not-found.view';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full'  },
  { path: 'inicio', component: HomeView  },
  { path: 'contactanos', component: ContactView  },
  { path: 'ayuda', component: HelpView  },
  { path: '**', component: NotFoundView  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
