import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected/protected.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { IsAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
