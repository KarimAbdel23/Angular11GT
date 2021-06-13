import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  templateUrl: './portal.view.html',
  styleUrls: ['./portal.view.css']
})
export class PortalView implements OnInit {
  public mostrarMiCuenta: boolean = false;
  public mostrarLogOut: boolean = false;

  constructor(  private sessionService: SessionService  ) {     }

  ngOnInit(): void {
    this.mostrarMiCuenta =  this.sessionService.isAuth;
    this.mostrarLogOut =  this.sessionService.isAuth;
  }

}
