import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent {

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  async onSignOut() {
    await this.authService.signOut();
    await this.router.navigate(['/']);
  }
}
