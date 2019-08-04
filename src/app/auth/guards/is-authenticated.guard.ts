import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthServiceModule } from '../auth-service.module';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: AuthServiceModule
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    console.log('IsAuthenticatedGuard constructor');
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      first(),
      tap( isAuthenticated => {
        if ( !isAuthenticated ) {
          console.log('trying to access protected page... redirect to root page');
          // TODO: persist original target route for later restore
          this.router.navigate( [ '/sign-in' ] );
        }
      } )
    );
  }
}
