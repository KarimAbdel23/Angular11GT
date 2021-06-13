import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { Session } from 'apps/ecommerce/src/app/commons/interfaces/session.interface';
//import { Login } from './../../../../commons/interfaces/login.interface';
//import { LoggerService } from 'apps/ecommerce/src/app/services/logger.service';
import { SessionService } from 'apps/ecommerce/src/app/services/session.service';
import { AuthHttpService } from '../../common/services/auth-http.service';
import { AuthCredentials } from '../../common/interfaces/auth-credentials.interface';


@Component({
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.css']
})
export class SignInView implements OnInit {

  //public loginForm: FormGroup;
  //public submitted: Boolean = false;
  //public error: {code: number, message: string} = null;
  //private login: Login;

  credencials: AuthCredentials = {
    email: '',
    password: ''
  }

  constructor(
    private authHttp: AuthHttpService,
    //private loggerService: LoggerService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  signIn() {
    console.log(this.credencials);
    //if (form.valid) {

        this.authHttp.signIn(this.credencials).subscribe(
              token => {
                  console.log(token);
                  this.sessionService.create(token.accessToken);
                  this.router.navigate(['/inicio']);
              }
          )
    //}
  }

  /*
  signIn(): void {
    console.log('CREDENCIALES');
    console.log(this.credencials);
    //call service


    this.submitted = true;
    this.error = null;
    //if(this.loginForm.valid){

      //this.login.email = this.credencials.email;
      //this.login.password = this.credencials.password;
      this.login = this.credencials;

      console.log('TRASPASO A LOGIN');
      console.log(this.login);

      this.loggerService.login(this.login).subscribe(
        data => this.correctLogin(data),
        error => this.error = JSON.parse(error._body)
      )
    //}
  }

  private correctLogin(data: Session){
    this.sessionService.setCurrentSession(data);
    this.router.navigate(['/inicio']);
  }
  */

}
