import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../commons/interfaces/session.interface';
import { Login } from '../commons/interfaces/login.interface';
import { User } from '../commons/interfaces/user.interface';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  email: string;
  session: Session;
  user: User;

  constructor(
      private http: HttpClient,
      private sessionService: SessionService
      ) {
   }


   private basePath = 'http://localhost:3000/';

   login(loginObj: Login): Observable<Session> {
      //return this.http.post(this.basePath + 'login', loginObj).map(this.extractData);
      this.email = loginObj.email.trim().toLowerCase();
      console.log('EMAIL: ' + this.email);
      this.http.get<User>(`http://localhost:3000/users?email=${this.email}`).subscribe(
          data => {
              this.user = data[0];
              console.log('USUARIO-1X:');
              console.log(this.user);

              if ( this.user.password == loginObj.password)
              {
                //this.sessionService.isAuth = true;

                this.sessionService.isAdmin = ( this.user.rol == 'Admin') ?  true : false;


                return  this.session = {
                  token: 'asdfjshdkjfhskj',
                  user: this.user
                }
              }
              else
              {
                //this.sessionService.isAuth = false;
                console.log("Entra al error")
                throw new Error("Favor de revisar sus credenciales");
              }


          }

      );

      /*

      */

      console.log('USUARIO-2:');
      console.log(this.user);

      console.log('SESION:');
      console.log(this.session);

      return of(this.session);
   }

   logout(): Observable<Boolean> {
      //return this.http.post(this.basePath + 'logout', {}).map(this.extractData);

      // this.http.get<User>(`http://localhost:3000/users/${email}`);
      return of(true);
   }

   private extractData(res: Response) {
      let body = res.json();
      return body;
   }

}
