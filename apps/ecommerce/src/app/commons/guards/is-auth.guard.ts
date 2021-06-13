import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanLoad {

  constructor(
    private session: SessionService,
    private router: Router
  ){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.session.isAuth || this.router.parseUrl('auth/ingresar');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.isAuth || this.router.parseUrl('auth/ingresar');

    /*
      console.log(this.session.isAuthenticated());
      if (this.session.isAuthenticated()) {
        // logged in so return true
        return true;
      }

      // not logged in so redirect to login page
      this.router.navigate(['/ingresar']);
      return false;
    */
  }

}
