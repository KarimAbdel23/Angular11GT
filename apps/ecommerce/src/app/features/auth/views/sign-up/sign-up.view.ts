import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'apps/ecommerce/src/app/services/session.service';
import { AuthHttpService } from '../../common/services/auth-http.service';

@Component({
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.css']
})
export class SignUpView implements OnInit {

  constructor(
    private route: Router,
    private authHttp: AuthHttpService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
  }

  saveUser(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.authHttp.signUp(form.value).subscribe(
        token => {
            console.log(token);
            this.sessionService.create(token.accessToken)
            this.route.navigate(['/']);
        }
    )
    }
  }
}
