import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  readonly signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
      },
      {
        label: 'Given name',
        key: 'given_name',
        required: true,
        displayOrder: 2,
      },
      {
        label: 'Family name',
        key: 'family_name',
        required: true,
        displayOrder: 3,
      },
      {
        label: 'Email address',
        key: 'email',
        required: true,
        displayOrder: 4,
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 5,
      },
    ]
  };
}
