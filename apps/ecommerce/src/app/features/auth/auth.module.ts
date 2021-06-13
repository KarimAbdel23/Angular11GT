import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { FormsModule } from '@angular/forms';
import { AppFormsModule } from '../../commons/forms/app-forms.module';
import { AuthCommonModule } from './common/common.module';
import { SignUpView } from './views/sign-up/sign-up.view';
import { LogOutView } from './views/log-out/log-out.view';



@NgModule({
  declarations: [SignInView, SignUpView, LogOutView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonModule,
    FormsModule,
    AppFormsModule
  ]
})
export class AuthModule { }
