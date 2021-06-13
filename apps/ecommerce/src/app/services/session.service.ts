import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../commons/interfaces/session.interface';
import { User } from '../commons/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //isAuth: boolean = false;
  get isAuth(): boolean {
     return Boolean(localStorage.getItem('token'));
  }

  isAdmin: boolean = false;

  constructor() {}

  /*

  private localStorageService;
  private currentSession : Session = null;

  constructor(private router:Router) {
    console.log('SessionService -- constructor');
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }


  setCurrentSession(session: Session): void {
    this.currentSession = session;
    console.log('SessionService -- setCurrentSession');
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session{
    console.log('SessionService -- loadSessionData');
    var sessionStr = this.localStorageService.getItem('currentUser');
    console.log(sessionStr);
    //return null;

    if(typeof sessionStr === 'undefined'){
      console.log("sessionStr no está definido");
    } else {
      console.log("sessionStr está definido");
    }

    if(sessionStr === null){
      console.log("sessionStr está nulo");
    } else {
      console.log("sessionStr no está nulo");
    }

    if (typeof(sessionStr) !== 'undefined') {
      console.log("Código cuando Storage es compatible");
    } else {

     console.log("Código cuando Storage NO es compatible");
    }


    if (typeof  sessionStr === 'undefined' || sessionStr === undefined) {
        return null;
    }
    else {
      console.log(sessionStr);
      //return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
    }


    return null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/ingresar']);
  }
*/

  create(token: string): void {
     localStorage.setItem('token', token);
  }

  destroy(): void {
    localStorage.removeItem('token');
  }

}
