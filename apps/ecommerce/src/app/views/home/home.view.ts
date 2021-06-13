import { Component, OnInit } from '@angular/core';
import { User } from '../../commons/interfaces/user.interface';
import { LoggerService } from '../../services/logger.service';
import { SessionService } from '../../services/session.service';

@Component({
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.css']
})
export class HomeView implements OnInit {
  public user: User;

  constructor(
    private sessionService: SessionService,
    private authenticationService: LoggerService

  ) { }

  ngOnInit(): void {
    //this.user = this.sessionService.getCurrentUser();
  }

  /*
      public logout(): void{
        this.authenticationService.logout().subscribe(
            response => {if(response) {this.sessionService.logout();}}
        );
      }
  */

}
