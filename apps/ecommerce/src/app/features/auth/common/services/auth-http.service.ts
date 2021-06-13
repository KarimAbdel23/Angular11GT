import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'apps/ecommerce/src/app/commons/interfaces/user.interface';
import { Observable } from 'rxjs';
import { AuthCommonModule } from '../common.module';
import { AuthCredentials } from '../interfaces/auth-credentials.interface';
import { AuthToken } from '../interfaces/auth-token.interface';

@Injectable({
  providedIn: AuthCommonModule
})
export class AuthHttpService {

  constructor( private http: HttpClient) { }

  /**
   * Encuentran un usuario y regresan el token
  */
  login(credentials: AuthCredentials): Observable<AuthToken>{
    return this.http.post<AuthToken>('/login', credentials)
  }

  signIn(credentials: AuthCredentials): Observable<AuthToken>{
     return this.http.post<AuthToken>('http://localhost:3000/signin', credentials);
  }

  /**
   * Estos metodos guardan un nuevo usuario
  */
  register(user: User): Observable<AuthToken> {
    return this.http.post<AuthToken>('/register', user);
  }

  signUp(user: User): Observable<AuthToken> {
    console.log('AuthHttpService -- signUp')
    console.log(user);
    return this.http.post<AuthToken>('http://localhost:3000/signup', user);
  }

  users(user: User): Observable<AuthToken> {
    return this.http.post<AuthToken>('/users', user);
  }

}
