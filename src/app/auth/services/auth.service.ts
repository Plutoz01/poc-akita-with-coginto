import { Injectable, OnDestroy } from '@angular/core';
import { concat, from, Observable, of, ReplaySubject, Subscription } from 'rxjs';
import { catchError, distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { CognitoUser } from '@aws-amplify/auth';
import { AuthServiceModule } from '../auth-service.module';
import { AuthState, defaultAuthState } from '../auth-state.interface';

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthService implements OnDestroy {
  private readonly authStateSubject = new ReplaySubject<AuthState>(1);
  private readonly amplifyStateSub: Subscription;

  constructor(private readonly amplifyService: AmplifyService) {
    const initialState$ = from(Auth.currentUserPoolUser()).pipe(
      map(AuthService.cognitoUserToAuthState),
      // Auth.currentUserPoolUser() throws error when no signed user is present
      catchError(() => of(defaultAuthState()))
    );
    const followingStates$ = amplifyService.authStateChange$.pipe(
      map(AuthService.amplifyToAuthState),
    );

    this.amplifyStateSub = concat(initialState$, followingStates$).pipe(
      distinctUntilChanged(isEqual),
    ).subscribe(this.authStateSubject);
  }

  private static amplifyToAuthState(amplifyState: { state: string, user: any }): AuthState {
    if (amplifyState && amplifyState.user) {
      return {
        isAuthenticated: !!amplifyState.user,
        username: amplifyState && amplifyState.user ? amplifyState.user.username : undefined
      };
    }
    return defaultAuthState();
  }

  private static cognitoUserToAuthState(cognitoUser: CognitoUser): AuthState {
    return {
      isAuthenticated: true,
      username: cognitoUser.getUsername()
    };
  }

  ngOnDestroy(): void {
    this.amplifyStateSub.unsubscribe();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.authStateSubject.asObservable().pipe(
      map(state => state.isAuthenticated)
    );
  }

  async signOut() {
    return Auth.signOut();
  }
}
