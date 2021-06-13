import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutView } from './views/log-out/log-out.view';
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';


const routes: Routes = [
  { path: '', redirectTo:  'ingresar', pathMatch: 'full'  },
  { path: 'ingresar', component: SignInView  },
  { path: 'registrarse', component: SignUpView},
  { path: 'salir', component: LogOutView},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
