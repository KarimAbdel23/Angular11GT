import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'apps/ecommerce/src/app/services/session.service';

@Component({
  templateUrl: './log-out.view.html',
  styleUrls: ['./log-out.view.css']
})
export class LogOutView implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
  )  {

     }

  ngOnInit(): void {
  }

  logout(): void {
    this.sessionService.destroy();
    this.router.navigate(['/']);
  }

}
