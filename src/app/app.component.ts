import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-akita-with-cognito';

  readonly isAuthenticated$: Observable<boolean>;

  constructor(private readonly authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
}
