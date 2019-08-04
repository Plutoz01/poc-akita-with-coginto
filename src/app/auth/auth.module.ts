import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyAngularModule, AmplifyModules, AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthServiceModule } from './auth-service.module';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AmplifyAngularModule,
    AuthServiceModule
  ],
  providers: [
    {
      provide: AmplifyService,
      useFactory: () => AmplifyModules({
        Auth
      })
    }
  ],
  exports: [
    SignInComponent
  ]
})
export class AuthModule { }

